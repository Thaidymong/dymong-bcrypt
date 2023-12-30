import { knx } from "src/connections/CreateKnexConnections";

export async function GetAllAdmins(){
    const admins = await knx("admin");
    return admins.map((admins)=>{
        return{
            ...admins,
        }
    })
}