
import { NextResponse } from "next/server";
import { queryData } from "../../../../utills/getQueryOutput";


export async function GET() {
    const data = await queryData();
    return NextResponse.json(data);
}


// export default async function POST(req,res){
//     if(req.method ==='POST'){
//         try{
//             const users = await prisma.users.findMany();
//             console.log('============================');
//             return NextResponse.json({users:"kishan"});
//             // res.status(200).json(users);
//         }catch(error){
//             console.log(error);
//             res.status(500).json({error:'Internal Server error'});
//         }
//     }else{
//         res.status(405).json({error:'Method Not allowed'});
//     }
// }