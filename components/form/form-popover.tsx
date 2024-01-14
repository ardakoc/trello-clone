"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover"

interface FormPopoverProps {    
    children: React.ReactNode
    align?: "start" | "center" | "end"
    side?: "left" | "right" | "top" | "bottom"
    sideOffset?: number
}

export const FormPopover = ({
    children,
    align,
    side = "bottom",
    sideOffset = 0
}: FormPopoverProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent
                align={align}
                className="w-80 pt-3"
                side={side}
                sideOffset={sideOffset}
            >
                <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                    Create board
                </div>
            </PopoverContent>
        </Popover>
    )
}