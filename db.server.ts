import { PrismaClient } from "@prisma/client";

interface CustomNodeJSGlobal extends NodeJS.Global {
    db: PrismaClient;
}

declare const global: CustomNodeJSGlobal;


export const db = global.db || new PrismaClient();

if (process.env.NODE_ENV === "development") global.db = db;