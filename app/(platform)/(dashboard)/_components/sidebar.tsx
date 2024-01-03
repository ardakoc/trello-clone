"use client"

import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";

interface SidebarProps {
    storageKey?: string // to use in accordion component
}

export const Sidebar = ({
    storageKey = 't-sidebar-state'
}: SidebarProps) => {
    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
        storageKey,
        {}
    )
    const {
        organization: activeOrganization,
        isLoaded: isLoadedOrganization
    } = useOrganization()
    const {
        userMemberships,
        isLoaded: isLoadedOrganizationList
    } = useOrganizationList({
        userMemberships : {
            infinite: true
        }
    })

    const defaultAccordionValue: string[] = Object.keys(expanded)
        .reduce((acc: string[], key: string) => {
            if (expanded[key]) {
                acc.push(key)
            }
            return acc
        }, [])

    /*  EXPL: What is the purpose of defining defaultAccordionValue const?

        The reason is the Accordion component wants defaultValue attr as
        string[] type. So we're iterating over the entire object and creating
        an array of active IDs, and we're turning them from the object into
        an array which just going to hold the string key.
        
        Example: If we have an object like { "123": true }, this operation
        converts it to ["123"].
        
    */

    const onExpand = (id: string) => {
        setExpanded((curr) => ({
            ...curr,
            [id]: !expanded[id],
        }))
    }

    if (!isLoadedOrganization || !isLoadedOrganizationList || userMemberships.isLoading ) {
        return (
            <>
                <Skeleton /> {/* TODO: Style it. */}
            </>
        )
    }

    return (
        <>
            <div className="font-medium text-xs flex items-center mb-1">
                <span className="pl-4">
                    Workspaces    
                </span>
                <Button
                    asChild
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="ml-auto"
                >
                    <Link href="/select-org">
                        <Plus
                            className="h-4 w-4"
                        />
                    </Link>
                </Button>
            </div>
            <Accordion
                type="multiple"
                defaultValue={defaultAccordionValue}
                className="space-y-2"
            >
                {userMemberships.data.map(({ organization }) => (
                    <p key={organization.id}>
                        {organization.id}
                    </p>
                ))}
            </Accordion>
        </>
    )
}