"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

import { Sidebar } from "./sidebar"

export const MobileSidebar = () => {
    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)

    const onOpen = useMobileSidebar((state) => state.onOpen)
    const onClose = useMobileSidebar((state) => state.onClose)
    const isOpen = useMobileSidebar((state) => state.isOpen)

    useEffect(() => {
        onClose()
    }, [pathname, onClose])

    /* Whenever our url changes, mobile sidebar will close. So we're
    going to use that when we click on a specific item in a sidebar
    the router is going to push, the url is going to change and our 
    sidebar is going to be closed. With this way we don't have to
    manually call onClose every single time. */

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    /*  EXPL: What is the purpose of isMounted variable?

        Each component is going to be server side rendered at least
        the first iteration of it. So when we're using client side
        components on the server side, it has a specific state like
        'closed', and then on the client side it suddenly 'opened'.
        And that creates a hydration error.

        So, how isMounted and useEffect helps us with this error?
        One thing we can do to guarantee that a specific component
        is only going to be rendered on the client, not on the server,
        not even server side rendered is by using useEffect. Because
        useEffect will not run in that server side rendering iteration.

        So basically what we are telling this component is if isMounted
        has not changed to true, meaning that if we have never reached
        this initial useEffect, we don't render anything because
        obviously this is still running on the server. But when it
        reaches useEffect, it changes isMounted to true and then we
        skip this and just render our component.

        https://www.joshwcomeau.com/react/the-perils-of-rehydration/
        
    */

    return (
        <>
            <Button
                onClick={onOpen}
                className="block md:hidden mr-2"
                variant="ghost"
                size="sm"
            >
                <Menu className="h-4 w-4" />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent
                    side="left"
                    className="p-2 pt-10"
                >
                    <Sidebar 
                        storageKey="t-sidebar-mobile-state"
                    />
                </SheetContent>
            </Sheet>
        </>
    )
}