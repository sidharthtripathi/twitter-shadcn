import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./db";
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      const u = user as unknown as any;
      // during login
      if (user) {
        // find if user is there in db
        const user = await db.user.findUnique({
          where: {
            email: u.email,
          },
        });
        if (!user) {
          const newUser = await db.user.create({
            data: {
              email: u.email,
              name: u.name,
              image: u.image,
            },
          });
          return {
            ...token,
            id: newUser.id,
          };
        } else {
          return {
            ...token,
            id: user.id,
          };
        }
      } else {
        return token;
      }
    },

    session: ({ token, session }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
};
