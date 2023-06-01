import NextAuth from "next-auth";

declare module "NextAuth" {
  export interface User {
    _id:  number;
  }
  export interface session {
    User: User;
  }

  export interface signIn {
    User: User
  }
}

export default NextAuth({
  callbacks: {
    session({ session, token, user, id}) {
      return session // The return type will match the one returned in `useSession()`
    },
  },
})