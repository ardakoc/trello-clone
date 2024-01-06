"use server"; // we can access the db and use formData to create a record by declare this.

import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

const CreateBoard = z.object({
    title: z.string(),
})

export async function create(formData: FormData) {
    const { title } = CreateBoard.parse({
        title: formData.get("title"),
    })

    await db.board.create({
        data: {
            title,
        },
    })

    revalidatePath("/organization/org_2aLmBCbAAK2PVuuymHaOhEMbm2I")
}