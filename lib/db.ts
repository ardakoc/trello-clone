import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient() // use existing or initialize a new client.

if (process.env.NODE_ENV !== "production")
    globalThis.prisma = db