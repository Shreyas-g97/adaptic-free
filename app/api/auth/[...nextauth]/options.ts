import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    // https://next-auth.js.org/configuration/providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username:", type: "text", placeholder: "Enter User Name" },
                password: { label: "Password:", type: "password" },
            },
            async authorize(credentials) {
                const user = { id: 1, name: "Shreyas", password: "AdapticDemo" }
                if (user) {
                    return user
                } else {
                    return null
                }
            },
        }),
    ],
}