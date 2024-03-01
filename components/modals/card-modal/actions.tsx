"use client"

import { Copy, Trash } from "lucide-react"

import { CardWithList } from "@/types"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

interface ActionsProps {
    data: CardWithList
}

export const Actions = ({
    data
}: ActionsProps) => {
    return (
        <div className="space-y-2 mt-2">
            <p className="text-xs font-semibold">
                Actions
            </p>
            <Button
                variant="gray"
                size="inline"
                className="w-full justify-start"
            >
                <Copy className="h-4 w-4 mr-2" />
                Copy
            </Button>
            <Button
                variant="gray"
                size="inline"
                className="w-full justify-start"
            >
                <Trash className="h-4 w-4 mr-2" />
                Delete
            </Button>
        </div>
    )
}

Actions.Skeleton = function () {
    return (
        <div className="space-y-2 mt-2">
            <Skeleton className="h-4 w-20 bg-neutral-200" />
            <Skeleton className="h-8 w-full bg-neutral-200" />
            <Skeleton className="h-8 w-full bg-neutral-200" />
        </div>
    )
}