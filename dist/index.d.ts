// import { PrismaClient } from "@prisma/client";

// export function createContext(ctx: any): Promise<Context>;

// export * from ".prisma/client/index.d";

// export interface Context {
//     prisma: PrismaClient;
// }

import { PrismaClient } from "@prisma/client";
export { Prisma } from ".prisma/client";

export interface Context {
    prisma: PrismaClient;
}

export function createContext(): Promise<Context>;
