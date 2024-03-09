import { queryData } from "../../../utills/getQueryOutput"

const page = async()=>{
    const queryOutput = await queryData();
  const user= JSON.stringify(queryOutput,null,2);
    return(
        user
    )
}
export default page