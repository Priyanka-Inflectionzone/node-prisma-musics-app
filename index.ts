import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
//     const user = await prisma.userInfo.create({
//        data:
//            {
//            id      : '3',
//            firstName : 'Raj',
//            lastName  : 'M',
//            email     : 'rajm@hmail.com',
//            phone     : '8265984758',
//            createdAt : new Date('2021-09-04'),
//            updatedAt : new Date()
//           } 
        

// })
// console.dir(user, { depth: null })

// const acc = await prisma.account.create({
//   data :{
//     id : '1',
//     password: 'abcdefgh',
//     gmailAuth: 'yes',
//     userId : '82773fa8-1c21-4188-9078-b545c139153e'

//   }
// })
// console.dir(acc, { depth: null })

// const withoutAlbum = await prisma.single.findMany({
//   where: {
//     albumIdInfo : null,
//     albumId : null
//   }
// })
// console.dir(withoutAlbum, { depth: null })


// const withAlbum = await prisma.single.findMany({
//   where: {
     
//     NOT: [{ albumId: null }]
//      }
     
//     })

// console.dir(withAlbum, { depth: null })
// }
// const studio1 = [];
const episodes = await prisma.podcastEpisode.findMany({
  where :{},
  distinct : ['episodeName'],
  orderBy : {
    podcastId : 'asc'
  }
  
}) 

 
 console.dir(episodes);
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

