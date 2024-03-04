"use client"

import { AuditLog } from "@prisma/client"
import { Skeleton } from "@/components/ui/skeleton"

interface ActivityProps {
    items: AuditLog[]
}

export const Activity = ({
    items
}: ActivityProps) => {
    return (
        <div>
            Activity
        </div>
    )
}

Activity.Skeleton = function ActivitySkeleton() {
    return(
        <div className="flex items-start gap-x-3 w-full">
            <Skeleton className="h-6 w-6 bg-neutral-200" />
            <div className="w-full">
                <Skeleton className="h-6 w-24 mb-2 bg-neutral-200" />
                <Skeleton className="h-10 w-full bg-neutral-200" />
            </div>
        </div>
    )
}