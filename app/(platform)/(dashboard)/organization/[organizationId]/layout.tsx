import { startCase } from "lodash";
import { auth } from "@clerk/nextjs";

import { OrganizationControl } from "./_components/organization-control";

export async function generateMetadata() {
    const { orgSlug } = auth()

    return {
        title: startCase(orgSlug || "organization"),
    }
}

const OrganizationIdLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <OrganizationControl />
            {children}
        </>
    )
}

export default OrganizationIdLayout;