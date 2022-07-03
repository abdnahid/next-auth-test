import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';

const options = {
  pages: {
    signIn: '/blogs',
    error: '/auth/error',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENTID,
      clientSecret: process.env.GITHUB_CLIENTSECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENTID,
      clientSecret: process.env.FACEBOOK_CLIENTSECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
    }),
  ],
};

export default NextAuth(options);
