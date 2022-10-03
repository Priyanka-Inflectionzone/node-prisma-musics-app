import { PrismaClient } from '@prisma/client'
import { AlternativeServiceOptions } from 'http2';
import { isDataView } from 'util/types';
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
//const studio1 = [];
// const episodes = await prisma.podcastEpisode.findMany({
//  select :{
//   podcastId : true,
//   episodeName : true
//  }
  
// }) 

// const sorted = episodes.sort(function(a,b){ 
  
//   return b.podcastId == a.podcastId ? 0 :  b.podcastId > a.podcastId ? 1 : -1 ;})
 

//  console.table(sorted);
// }


// const users = [{}];
// const user1 = await prisma.userInfo.findUnique({
//   where : {
//     id :'1'
//   },
//       include:{
//       playlistsCreated  : true,
//       playlistsFollowed : true
//      },
//     })
//     users.push({user1});
   

//     const user2 = await prisma.userInfo.findUnique({
//       where : {
//         id :'2'
//       },
//           include:{
//           playlistsCreated  : true,
//           playlistsFollowed : true
//          },
//         })

//         users.push({user2})
    
        // const user3 = await prisma.userInfo.findUnique({
        //   where : {
        //     id :'3'
        //   },
        //       include:{
        //       playlistsCreated  : true,
        //       playlistsFollowed : true
        //      },
        //     })
        //     users.push(user3);


    
    
    //console.dir(users, {depth: null});

    // const updateUser = await prisma.userInfo.update({
    //   where: {
    //     id: '1',
    //   },
    //   data: {
    //     email: 'user0123@hmail.com',
    //     phone: '9987456325'
    //   }
    // })
    // console.dir(updateUser, {depth : null});
  //   const artists1 = await prisma.artist.findMany({
  //           select:{
  //           userinfo: {
  //             select : {
  //               firstName : true
  //             }
  //           },
  //           podcasts :true,
  //           Album : true,
  //           Single : true,
  //           audiobooks: true
          
  //   }
  // })

  // artists1.sort(function(a,b){
  //   let x = a.userinfo.firstName.toUpperCase();
  //   let y = b.userinfo.firstName.toUpperCase();
  //   return x==y ? 0 : x<y ? -1 : 1;  
  // }
  // )
  
  // console.dir( artists1, {depth:null});

  // const podcastinfo = await prisma.podcast.findMany({
  //   select:{
  //     id:true,
  //     episode: true,
  //     podcastEpisodes:{
  //       select :
  //       {
  //         episodeName :true
  //       }

  //     } 
  //   }
  // })

  // console.dir(podcastinfo,{depth:null})

  const studios = [];

  const studioInfo1 = await prisma.studio.findUnique({
    where : {
      id : '1'
    },
  select:{
    name : true,
    audiobooks :{
      select:{
        id: true
      }
    },
    podcasts :{ 
      select:{
      id: true
    }},
    albums : {
       select:{
      id: true
    }}
  }
  })
  studios.push(studioInfo1);

  const studioInfo2 = await prisma.studio.findUnique({
    where : {
      id : '2'
    },
  select:{
    name : true,
    audiobooks :{
      select:{
        id: true
      }
    },
    podcasts :{ 
      select:{
      id: true
    }},
    albums : {
       select:{
      id: true
    }}
  }
  })
  studios.push(studioInfo2);

  const studioInfo3 = await prisma.studio.findUnique({
    where : {
      id : '3'
    },
  select:{
    name : true,
    audiobooks :{
      select:{
        id: true
      }
    },
    podcasts :{ 
      select:{
      id: true
    }},
    albums : {
       select:{
      id: true
    }}
  }
  })
  studios.push(studioInfo3);

  console.dir(studios, {depth:null}) ;
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

