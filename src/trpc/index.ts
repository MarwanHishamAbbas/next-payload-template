// Trpc starting file server

import { z } from "zod"

import { router } from "./trpc"

export const appRouter = router({})

export type AppRouter = typeof appRouter
