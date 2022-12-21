import { z } from 'zod'
import create from 'zustand'

import { persist } from 'zustand/middleware'

type User = {
  email: string
  createdAt: Date | null
}

type UserStore = {
  user: User
  login: (email: User['email']) => void
}

const emailSchema = z.string().min(1).email()

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: {
        email: '',
        createdAt: null,
      },
      login: (email) => {
        set(() => ({
          user: {
            email: emailSchema.parse(email),
            createdAt: new Date(),
          },
        }))
      },
    }),
    {
      name: 'user-storage',
    },
  ),
)
