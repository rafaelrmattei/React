import type { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface User extends DefaultUser {
    id: string
    username: string
    emailVerified: Date | null
    createdAt: Date
    updatedAt: Date
  }

  interface Session extends DefaultSession {
    user: User
  }
}
