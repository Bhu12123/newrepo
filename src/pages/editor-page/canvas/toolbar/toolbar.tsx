import React, { useState } from 'react';
import { Card, CardContent } from '@/components/card/card';
import { ZoomIn, ZoomOut, Save, Redo, Undo, Scan } from 'lucide-react';
import { Separator } from '@/components/separator/separator';
import { ToolbarButton } from './toolbar-button';
import { useHistory } from '@/hooks/use-history';
import { useChartDB } from '@/hooks/use-chartdb';
import { useOnViewportChange, useReactFlow } from '@xyflow/react';
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from '@/components/tooltip/tooltip';

const convertToPercentage = (value: number) => `${Math.round(value * 100)}%`;

export interface ToolbarProps {}

export const Toolbar: React.FC<ToolbarProps> = () => {
    const { updateDiagramUpdatedAt } = useChartDB();
    const { redo, undo, hasRedo, hasUndo } = useHistory();
    const { getZoom, zoomIn, zoomOut, fitView } = useReactFlow();
    const [zoom, setZoom] = useState<string>(convertToPercentage(getZoom()));
    useOnViewportChange({
        onChange: ({ zoom }) => {
            setZoom(convertToPercentage(zoom));
        },
    });

    const zoomDuration = 200;
    const zoomInHandler = () => {
        zoomIn({ duration: zoomDuration });
    };

    const zoomOutHandler = () => {
        zoomOut({ duration: zoomDuration });
    };

    const resetZoom = () => {
        fitView({
            minZoom: 1,
            maxZoom: 1,
            duration: zoomDuration,
        });
    };

    const showAll = () => {
        fitView({ duration: zoomDuration });
    };

    return (
        <div className="px-1">
            <Card className="shadow-none p-0 bg-secondary h-[44px]">
                <CardContent className="p-1 flex flex-row h-full items-center">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span>
                                <ToolbarButton onClick={updateDiagramUpdatedAt}>
                                    <Save />
                                </ToolbarButton>
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>Save</TooltipContent>
                    </Tooltip>
                    <Separator orientation="vertical" />
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span>
                                <ToolbarButton onClick={showAll}>
                                    <Scan />
                                </ToolbarButton>
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>Show All</TooltipContent>
                    </Tooltip>
                    <Separator orientation="vertical" />
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span>
                                <ToolbarButton onClick={zoomOutHandler}>
                                    <ZoomOut />
                                </ToolbarButton>
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>Zoom Out</TooltipContent>
                    </Tooltip>
                    <ToolbarButton onClick={resetZoom}>{zoom}</ToolbarButton>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span>
                                <ToolbarButton onClick={zoomInHandler}>
                                    <ZoomIn />
                                </ToolbarButton>
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>Zoom In</TooltipContent>
                    </Tooltip>
                    <Separator orientation="vertical" />
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span>
                                <ToolbarButton
                                    onClick={undo}
                                    disabled={!hasUndo}
                                >
                                    <Undo />
                                </ToolbarButton>
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>Undo</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span>
                                <ToolbarButton
                                    onClick={redo}
                                    disabled={!hasRedo}
                                >
                                    <Redo />
                                </ToolbarButton>
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>Redo</TooltipContent>
                    </Tooltip>
                </CardContent>
            </Card>
        </div>
    );
};
