
process.env.NODE_NO_WARNINGS = 'stream/web';
import User from "@app/ai/ai/ai/user";
import { connectedDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler =NextAuth({
    providers: [
        GoogleProvider({
            clientId: "273571730540-vqihqjgqqlaq4pc5ke9ifgm8g20n2a10.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ],
    callbacks: {
        async session ({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })
            // console.log(sessionUser);
            session.user.id= sessionUser._id.toString();
            return session;
        },
        async signIn ({ profile }) {
            try {
               await connectedDB()
            //    check if user exist
            const userExist = User.findOne({
                email: profile.email
            })
               
            // if user doesn't exist, create a new user
            if (!userExist) {
                await User.create({
                    email: profile.email,
                    /* `username: profile.name.replace(" ", "").toLowerCase()` is creating a username for
                    the user by taking their full name from the Google profile, removing any spaces, and
                    converting it to lowercase. This is done to ensure that the username is unique and
                    consistent across all users. */
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image:profile.picture 
                })
            }
               return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
})

export { handler as GET, handler as POST };

