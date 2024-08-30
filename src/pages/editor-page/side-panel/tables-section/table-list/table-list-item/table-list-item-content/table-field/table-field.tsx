import React from 'react';
import { Ellipsis, Trash2 } from 'lucide-react';
import { Input } from '@/components/input/input';
import { Combobox } from '@/components/combobox/combobox';
import { Button } from '@/components/button/button';
import { KeyRound } from 'lucide-react';
import { Separator } from '@/components/separator/separator';

import { DBField } from '@/lib/domain/db-field';
import { useChartDB } from '@/hooks/use-chartdb';
import { dataTypeMap } from '@/lib/data/data-types';
import { Toggle } from '@/components/toggle/toggle';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/tooltip/tooltip';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/popover/popover';
import { Label } from '@/components/label/label';
import { Checkbox } from '@/components/checkbox/checkbox';

export interface TableFieldProps {
    field: DBField;
    updateField: (attrs: Partial<DBField>) => void;
    removeField: () => void;
}

export const TableField: React.FC<TableFieldProps> = ({
    field,
    updateField,
    removeField,
}) => {
    const { databaseType } = useChartDB();

    const dataFieldOptions = dataTypeMap[databaseType].map((type) => ({
        label: type.name,
        value: type.id,
    }));

    return (
        <div className="flex flex-row p-1 justify-between flex-1">
            <div className="flex w-8/12 gap-1 justify-start overflow-hidden">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span className="w-7/12">
                            <Input
                                className="h-8 focus-visible:ring-0 w-full !overflow-hidden !whitespace-nowrap !text-ellipsis"
                                type="text"
                                placeholder="Name"
                                value={field.name}
                                onChange={(e) =>
                                    updateField({
                                        name: e.target.value,
                                    })
                                }
                            />
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>{field.name}</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger className="flex h-8 !w-5/12" asChild>
                        <span>
                            <Combobox
                                className="flex h-8 w-full"
                                mode="single"
                                options={dataFieldOptions}
                                placeholder="Type"
                                selected={field.type.id}
                                onChange={(value) =>
                                    updateField({
                                        type: dataTypeMap[databaseType].find(
                                            (v) => v.id === value
                                        ),
                                    })
                                }
                                emptyText="No types found."
                            />
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>{field.type.name}</TooltipContent>
                </Tooltip>
            </div>
            <div className="flex w-4/12 gap-1 justify-end overflow-hidden">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span>
                            <Toggle
                                variant="default"
                                className="hover:bg-primary-foreground p-2 w-[32px] text-slate-500 hover:text-slate-700 text-xs h-8"
                                pressed={field.nullable}
                                onPressedChange={(value) =>
                                    updateField({
                                        nullable: value,
                                    })
                                }
                            >
                                N
                            </Toggle>
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>Nullable?</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span>
                            <Toggle
                                variant="default"
                                className="hover:bg-primary-foreground p-2 w-[32px] text-slate-500 hover:text-slate-700 h-8"
                                pressed={field.primaryKey}
                                onPressedChange={(value) =>
                                    updateField({
                                        unique: value,
                                        primaryKey: value,
                                    })
                                }
                            >
                                <KeyRound className="h-3.5" />
                            </Toggle>
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>Primary Key</TooltipContent>
                </Tooltip>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="ghost"
                            className="hover:bg-primary-foreground p-2 w-[32px] text-slate-500 hover:text-slate-700 h-8"
                        >
                            <Ellipsis className="h-3.5 w-3.5" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-52">
                        <div className="flex gap-2 flex-col">
                            <div className="text-sm font-semibold">
                                Field Attributes
                            </div>
                            <Separator orientation="horizontal" />
                            <div className="flex justify-between items-center">
                                <Label
                                    htmlFor="width"
                                    className="text-gray-700"
                                >
                                    Unique
                                </Label>
                                <Checkbox
                                    checked={field.unique}
                                    disabled={field.primaryKey}
                                    onCheckedChange={(value) =>
                                        updateField({
                                            unique: !!value,
                                        })
                                    }
                                />
                            </div>
                            <Separator orientation="horizontal" />
                            <Button
                                variant="outline"
                                className="flex !text-red-700 gap-2"
                                onClick={removeField}
                            >
                                <Trash2 className="text-red-700 w-3.5 h-3.5" />
                                Delete field
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};
