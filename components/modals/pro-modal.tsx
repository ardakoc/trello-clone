"use client"

import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const ProModal = () => {
    const proModal = useProModal()

    return (
        <Dialog
            open={proModal.isOpen}
            onOpenChange={proModal.onClose}
        >
            <DialogContent className="max-w-md p-0 pb-4 overflow-hidden">
                <div className="aspect-video relative flex items-center justify-center">
                    <Image
                        src="/hero.svg"
                        alt="Hero"
                        className="object-cover"
                        fill
                    />
                </div>
                <div className="p-6 mx-auto space-y-6 text-neutral-700 ">
                    <h2 className="font-semibold text-xl">
                        Upgrade to Taskello Pro Today!
                    </h2>
                    <p className="font-semibold text-xs text-neutral-700">
                        Explore the best of Taskello
                    </p>
                    <div className="pl-3">
                        <ul className="text-sm list-disc">
                            <li>Unlimited boards</li>
                            <li>Advanced checklists</li>
                            <li>Admin and security features</li>
                            <li>And more!</li>
                        </ul>
                    </div>
                    <Button
                        variant="primary"
                        className="w-full"
                    >
                        Upgrade
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}