import { db } from "~/server/db"
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { anonymous, oAuthProxy, admin} from "better-auth/plugins";

export const authConfig = {
    appName: "Roro",
    database: prismaAdapter(db, {
        provider: "postgresql"
    })
    socialProviders: {
        google: {
            clientID:
        }
    }
}

export const auth = betterAuth(authConfig)