import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.UserInfo.create({
       data:
           {firstName : 'Priyanka',
           lastName  : 'Kale',
           email     : 'priyanka@ymail.com',
           phone     : '9865741235',
           createdAt : new Date('2020-10-11'),
           updatedAt :
          } 
        

})

}

main()

  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
