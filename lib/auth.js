import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDb } from "./utils";
import { User } from "./models";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      //console.log(user, account, profile);
      if (account.provider === "google") {
        connectToDb();
        try {
          const userEmail = await User.findOne({ email: user.email });
          if (!userEmail) {
            const newUser = await new User({
              name: user.name,
              email: user.email,
              role: "TA"
            });
            console.log(newUser, "\n User Saved Successfully.");

            await newUser.save();
          }
          return true;
        } catch (e) {
          console.log("Error: ", e);
          return false;
        }
      }
      return false;
    },
  },
};
