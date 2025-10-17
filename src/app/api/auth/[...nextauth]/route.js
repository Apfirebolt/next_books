import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const authOptions = {
  providers: [
    // Add Google Provider or any other providers if needed
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "openid email profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
          access_type: "offline",
          prompt: "consent"
        }
      }
    }),
  ],
  callbacks: {
    // 1. Add user data (like user ID) to the JWT
    async jwt({ token, user }) {
      if (user) {
        // user here is the object returned by the 'authorize' function above
        token.id = user.id;
        token.email = user.email; // Add other properties as needed
      }
      return token;
    },
    // 2. Add the ID from the JWT to the session object
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };