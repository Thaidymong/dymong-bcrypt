import { knx } from "src/connections/CreateKnexConnections"

export default async function GetUserById(_,{id}:{id:number},{}){
    const user = await knx("users").where({id}).first();
    return user;
}