import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          //Pego no google - urls de escopos exigidos pela nossa aplicação que são necessários autorização
          scope:
            'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar',
        },
      },
    }),
  ],
  callbacks: {
    // Verifica o retorno do google pra ver se o usuário autorizou o uso do calendário
    async signIn({ account }) {
      if (!account?.scope?.includes('https://www.googleapis.com/auth/calendar')) {
        return '/register/connect-calendar/?error=permissions'
      }

      return true //Se der erro manda pra connect-calendar com error=permissions, senão retorna que está tudo certo
    },
  },
}

export default NextAuth(authOptions)
