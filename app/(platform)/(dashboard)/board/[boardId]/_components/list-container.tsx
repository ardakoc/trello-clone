"use client"

import { ListWithCards } from "@/types"

interface ListContainerProps {
    boardId: string
    data: ListWithCards[]
}

export const ListContainer = ({
    boardId,
    data,
}: ListContainerProps) => {
    return (
        <div>
            List Container
        </div>
    )
}