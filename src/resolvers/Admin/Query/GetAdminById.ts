import { knx } from "src/connections/CreateKnexConnections"

export default async function GetAdminById(_,{id}:{id:number},{}){
    const admin = await knx("admin").where({id}).first();
    return admin;
}