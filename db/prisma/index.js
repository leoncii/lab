// const { PrismaClient } = require('@prisma/client')

// const prisma =
//   global.prisma ||
//   new PrismaClient({
//     log: ['error']
//   })

// if (process.env.NODE_ENV !== 'production') global.prisma = prisma

// module.exports = { prisma }
import { PrismaClient } from '@prisma/client'

let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma
