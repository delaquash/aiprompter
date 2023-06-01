import NextAuth from "next-auth"

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

