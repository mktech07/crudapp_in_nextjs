
import prisma  from "./prismaClient";

export const queryData = async()=>{
    try {
        const queryOutput = await prisma.users.findMany();
        console.log("---------------");
        return queryOutput; 
    } catch (error) {
        console.log(error);
    }
    // finally{
    //     prisma.$disconnect();
    // }
}


// export default async function CreateUser(req,res){
//     if(req.method ==='POST'){
//         try{
//             const users = await prisma.users.findMany();
//             res.status(200).json(users);
//         }catch(error){
//             console.log(error);
//             res.status(500).json({error:'Internal Server error'});
//         }
//     }else{
//         res.status(405).json({error:'Method Not allowed'});
//     }
// }