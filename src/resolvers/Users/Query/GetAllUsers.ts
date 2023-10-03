import { knx } from "src/connections/CreateKnexConnections";

export async function GetAllUsers(){
    const users = await knx("users");
    return users.map((item)=>{
        return{
            ...item,
        }
    })
}