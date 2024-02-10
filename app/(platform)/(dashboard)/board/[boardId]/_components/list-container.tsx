"use client"

import { useEffect, useState } from "react"
import { DragDropContext, Droppable } from "@hello-pangea/dnd"

import { ListWithCards } from "@/types"

import { ListForm } from "./list-form"
import { ListItem } from "./list-item"

interface ListContainerProps {
    boardId: string
    data: ListWithCards[]
}

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}

export const ListContainer = ({
    boardId,
    data,
}: ListContainerProps) => {
    const [orderedData, setOrderedData] = useState(data)

    useEffect(() => {
        setOrderedData(data)
    }, [data])

    const onDragEnd = (result: any) => {
        const { destination, source, type } = result

        console.log ({result})

        if (!destination) {
            return
        }

        // If dropped in the same position
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        // If user moves a list
        if (type === "list") {
            const items = reorder(
                orderedData, source.index, destination.index
            ).map((item, index) => ({ ...item, order: index }))

            setOrderedData(items)
            // TODO: Trigger server action
        }

        // If user moves a card
        if (type === "card") {
            let newOrderedData = [...orderedData]

            const sourceList = newOrderedData.find(list => list.id === source.droppableId)
            const destList = newOrderedData.find(list => list.id === destination.droppableId)

            if (!sourceList || !destList) {
                return
            }

            // Check if cards exists on the sourceList
            if (!sourceList.cards) {
                sourceList.cards = []
            }

            // Check if cards exists on the destList
            if (!destList.cards) {
                destList.cards = []
            }

            // If user moves the card in the same list
            if (source.droppableId === destination.droppableId) {
                const reorderedCards = reorder(
                    sourceList.cards, source.index, destination.index
                )

                reorderedCards.forEach((card, index) => {
                    card.order = index
                })

                sourceList.cards = reorderedCards

                setOrderedData(newOrderedData)
                // TODO: Trigger server action
            }
            // If user moves the card to another list
            else {
                // Remove the card from the source list
                const [movedCard] = sourceList.cards.splice(source.index, 1)
                // Assign the new listId to the moved card
                movedCard.listId = destination.droppableId
                // Add card to the destination list
                destList.cards.splice(destination.index, 0, movedCard)

                sourceList.cards.forEach((card, index) => {
                    card.order = index
                })

                // Update the order for each card in the destination list
                destList.cards.forEach((card, index) => {
                    card.order = index
                })

                setOrderedData(newOrderedData)
                // TODO: Trigger server action
            }
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="lists" type="list" direction="horizontal">
                {(provided) => (
                    <ol
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="flex gap-x-3 h-full"
                    >
                        {orderedData.map((list, index) => {
                            return (
                                <ListItem
                                    key={list.id}
                                    index={index}
                                    data={list}
                                />
                            )
                        })}
                        {provided.placeholder}
                        <ListForm />
                        <div className="flex-shrink-0 w-1" />
                    </ol>
                )}
            </Droppable>
        </DragDropContext>
    )
}