
import User from "@models/user";
import { connectedDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";



// interface OAuthConfig {
//     session: any;
//     token?: ReactNode;
//     user: string;
//     profile: IProfile;
// }

// interface IProfile {
//     picture: string;
//     email: string;
//     username: string;
//     image: string;
//     name: string
//     user?: string
//     account?:string;
//     profile?: string;  
//     credentials?:string;
// }

const handler =NextAuth({
    providers: [
        GoogleProvider({
            clientId: "process.env.CLIENT_ID",
            clientSecret: "process.env.CLIENT_SECRET"
        })
    ],
    callbacks: {
        async session ({ session }: any) {
            const sessionUser = await User.findOne({
                email: session?.user?.email
            })

            session.user.id= sessionUser._id.toString();
            return session;
        },
        async signIn ({ profile }: any) {
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

