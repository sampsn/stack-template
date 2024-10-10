import { dev } from "$app/environment";
import { drizzle } from "drizzle-orm/connect";

export const db = await drizzle("postgres-js", {
    connection: {
        url: process.env.DATABASE_URL,
        ssl: true
    }
})