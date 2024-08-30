import React, { useCallback } from 'react';
import {
    CircleDotDashed,
    Pencil,
    EllipsisVertical,
    Trash2,
    FileType2,
    FileKey2,
    Check,
} from 'lucide-react';
import { ListItemHeaderButton } from '@/pages/editor-page/side-panel/list-item-header-button/list-item-header-button';
import { DBTable } from '@/lib/domain/db-table';
import { Input } from '@/components/input/input';
import { useChartDB } from '@/hooks/use-chartdb';
import { useClickAway, useKeyPressEvent } from 'react-use';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/dropdown-menu/dropdown-menu';
import { useReactFlow } from '@xyflow/react';
import { useLayout } from '@/hooks/use-layout';
import { useBreakpoint } from '@/hooks/use-breakpoint';

export interface TableListItemHeaderProps {
    table: DBTable;
}

export const TableListItemHeader: React.FC<TableListItemHeaderProps> = ({
    table,
}) => {
    const { updateTable, removeTable, createIndex, createField } = useChartDB();
    const { fitView, setNodes } = useReactFlow();
    const { hideSidePanel } = useLayout();
    const [editMode, setEditMode] = React.useState(false);
    const [tableName, setTableName] = React.useState(table.name);
    const { isMd: isDesktop } = useBreakpoint('md');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const editTableName = useCallback(() => {
        if (!editMode) return;
        if (tableName.trim()) {
            updateTable(table.id, { name: tableName.trim() });
        }

        setEditMode(false);
    }, [tableName, table.id, updateTable, editMode]);

    useClickAway(inputRef, editTableName);
    useKeyPressEvent('Enter', editTableName);

    const enterEditMode = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.stopPropagation();
        setEditMode(true);
    };

    const focusOnTable = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.stopPropagation();
            setNodes((nodes) =>
                nodes.map((node) =>
                    node.id == table.id
                        ? {
                              ...node,
                              selected: true,
                          }
                        : {
                              ...node,
                              selected: false,
                          }
                )
            );
            fitView({
                duration: 500,
                maxZoom: 1,
                minZoom: 1,
                nodes: [
                    {
                        id: table.id,
                    },
                ],
            });

            if (!isDesktop) {
                hideSidePanel();
            }
        },
        [fitView, table.id, setNodes, hideSidePanel, isDesktop]
    );

    const deleteTableHandler = useCallback(() => {
        removeTable(table.id);
    }, [table.id, removeTable]);

    const renderDropDownMenu = useCallback(
        () => (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <ListItemHeaderButton>
                        <EllipsisVertical />
                    </ListItemHeaderButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuLabel>Table Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            className="flex justify-between"
                            onClick={(e) => {
                                e.stopPropagation();
                                createField(table.id);
                            }}
                        >
                            Add field
                            <FileType2 className="w-3.5 h-3.5" />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="flex justify-between"
                            onClick={(e) => {
                                e.stopPropagation();
                                createIndex(table.id);
                            }}
                        >
                            Add index
                            <FileKey2 className="w-3.5 h-3.5" />
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            onClick={deleteTableHandler}
                            className="flex justify-between !text-red-700"
                        >
                            Delete table
                            <Trash2 className="text-red-700 w-3.5 h-3.5" />
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
        [table.id, createField, createIndex, deleteTableHandler]
    );

    return (
        <div className="h-11 flex items-center justify-between flex-1 gap-1 group">
            <div className="flex flex-1">
                {editMode ? (
                    <Input
                        ref={inputRef}
                        autoFocus
                        type="text"
                        placeholder={table.name}
                        value={tableName}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => setTableName(e.target.value)}
                        className="h-7 focus-visible:ring-0 w-full"
                    />
                ) : (
                    table.name
                )}
            </div>
            <div className="flex flex-row-reverse">
                {!editMode ? (
                    <>
                        <div>{renderDropDownMenu()}</div>
                        <div className="flex md:hidden md:group-hover:flex flex-row-reverse">
                            <ListItemHeaderButton onClick={enterEditMode}>
                                <Pencil />
                            </ListItemHeaderButton>
                            <ListItemHeaderButton onClick={focusOnTable}>
                                <CircleDotDashed />
                            </ListItemHeaderButton>
                        </div>
                    </>
                ) : (
                    <ListItemHeaderButton onClick={editTableName}>
                        <Check />
                    </ListItemHeaderButton>
                )}
            </div>
        </div>
    );
};
