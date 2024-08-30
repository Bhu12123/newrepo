import { Button } from '@/components/button/button';
import { DiagramIcon } from '@/components/diagram-icon/diagram-icon';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/dialog/dialog';
import { ScrollArea } from '@/components/scroll-area/scroll-area';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/table/table';
import { useConfig } from '@/hooks/use-config';
import { useDialog } from '@/hooks/use-dialog';
import { useStorage } from '@/hooks/use-storage';
import { Diagram } from '@/lib/domain/diagram';
import { DialogProps } from '@radix-ui/react-dialog';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface OpenDiagramDialogProps {
    dialog: DialogProps;
}

export const OpenDiagramDialog: React.FC<OpenDiagramDialogProps> = ({
    dialog,
}) => {
    const { closeOpenDiagramDialog } = useDialog();
    const { updateConfig } = useConfig();
    const navigate = useNavigate();
    const { listDiagrams } = useStorage();
    const [diagrams, setDiagrams] = useState<Diagram[]>([]);
    const [selectedDiagramId, setSelectedDiagramId] = useState<
        string | undefined
    >();

    useEffect(() => {
        setSelectedDiagramId(undefined);
    }, [dialog.open]);

    useEffect(() => {
        const fetchDiagrams = async () => {
            const diagrams = await listDiagrams({ includeTables: true });
            setDiagrams(
                diagrams.sort(
                    (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()
                )
            );
        };
        fetchDiagrams();
    }, [listDiagrams, setDiagrams, dialog.open]);

    const openDiagram = (diagramId: string) => {
        if (diagramId) {
            updateConfig({ defaultDiagramId: diagramId });
            navigate(`/diagrams/${diagramId}`);
        }
    };
    return (
        <Dialog
            {...dialog}
            onOpenChange={(open) => {
                if (!open) {
                    closeOpenDiagramDialog();
                }
            }}
        >
            <DialogContent
                className="flex flex-col md:w-[100vw] w-[90vw] xl:min-w-[55vw] max-h-[90vh] overflow-y-auto"
                showClose
            >
                <DialogHeader>
                    <DialogTitle>Open Diagram</DialogTitle>
                    <DialogDescription>
                        Select a diagram to open from the list below.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-1 items-center justify-center">
                    <ScrollArea className="h-80 w-full">
                        <Table>
                            <TableHeader className="sticky top-0 bg-background">
                                <TableRow>
                                    <TableHead />
                                    <TableHead>Name</TableHead>
                                    <TableHead className="sm:inline-flex items-center hidden">
                                        Created at
                                    </TableHead>
                                    <TableHead>Last modified</TableHead>
                                    <TableHead className="text-center">
                                        Tables
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {diagrams.map((diagram) => (
                                    <TableRow
                                        key={diagram.id}
                                        data-state={`${selectedDiagramId === diagram.id ? 'selected' : ''}`}
                                        onClick={(e) => {
                                            switch (e.detail) {
                                                case 1:
                                                    setSelectedDiagramId(
                                                        diagram.id
                                                    );
                                                    break;
                                                case 2:
                                                    openDiagram(diagram.id);
                                                    closeOpenDiagramDialog();
                                                    break;
                                                default:
                                                    setSelectedDiagramId(
                                                        diagram.id
                                                    );
                                            }
                                        }}
                                    >
                                        <TableCell className="flex justify-center">
                                            <DiagramIcon diagram={diagram} />
                                        </TableCell>
                                        <TableCell>{diagram.name}</TableCell>
                                        <TableCell className="sm:inline-flex items-center hidden">
                                            {diagram.createdAt.toLocaleString()}
                                        </TableCell>
                                        <TableCell>
                                            {diagram.updatedAt.toLocaleString()}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            {diagram.tables?.length}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ScrollArea>
                </div>

                <DialogFooter className="flex !justify-between gap-2">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Cancel
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button
                            type="submit"
                            disabled={!selectedDiagramId}
                            onClick={() => openDiagram(selectedDiagramId ?? '')}
                        >
                            Open
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
