import { connectedDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { ReactNode } from "react";


interface OAuthConfig {
    session: ReactNode;
    profile: string;
}

const handler =NextAuth({
    providers: [
        GoogleProvider({
            clientId: "process.env.CLIENT_ID",
            clientSecret: "process.env.CLIENT_SECRET"
        })
    ],
    async session ({ session }: OAuthConfig) {

    },
    async signIn ({ profile }: OAuthConfig) {
        try {
           await connectedDB()
        //    check if user exist
           
        // if user doesn't exist, create a new user
           return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
})

export { handler as GET, handler as POST };

