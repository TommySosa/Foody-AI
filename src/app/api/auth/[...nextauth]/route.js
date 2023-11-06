import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google" 
import FacebookProviders from 'next-auth/providers/facebook'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        try {
          const res = await fetch(`http://localhost:3000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            })
          });

          if (res.status == 401) {
            throw new Error('Invalid credentials.')
          }
          if (res.status == 400) {
            throw new Error('Email and password are required.')
          }
          const resJSON = await res.json()
          const userFound = await resJSON

          return userFound;
        } catch (error) {
          throw error;
        }
      },
    }),
    GoogleProvider({
      clientId : process.env.GOOGLE_CLIENT_ID ,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProviders({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
    
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});

export { handler as GET, handler as POST };