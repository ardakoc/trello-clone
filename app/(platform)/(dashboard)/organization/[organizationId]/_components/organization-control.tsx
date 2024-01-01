"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"

import { useOrganizationList } from "@clerk/nextjs"

export const OrganizationControl = () => {
    const params = useParams()
    const { setActive } = useOrganizationList() // we can use this to change the organization

    useEffect(() => {
        if (!setActive) return;

        setActive({
            organization: params.organizationId as string,
        })
    }, [setActive, params.organizationId]) // it's only going to be called once organizationId changes

    return null
}