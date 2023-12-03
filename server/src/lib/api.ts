import { PrismaClient } from '@prisma/client'

export const api = new PrismaClient({ log: ['query'] })
