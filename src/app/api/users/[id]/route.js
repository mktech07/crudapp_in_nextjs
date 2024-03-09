import { NextResponse } from "next/server";
import { queryData } from "../../../../../utills/getQueryOutput";


export async function GET(request,content){
    // console.log(content.params.id);
    try{
        const userData = await queryData();
        const data = userData.filter((item)=>item.id==content.params.id);
        if(data.length===0){
            return NextResponse.json({message:"No Records Found",data:[]},{status:404});
        }
        return NextResponse.json(data,{status:200});
    }catch(error){
        console.log(error);
        return NextResponse.error(new Error("Internal Server Error"));
    }


    
}