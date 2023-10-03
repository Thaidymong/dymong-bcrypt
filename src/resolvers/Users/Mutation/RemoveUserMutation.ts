import { knx } from "src/connections/CreateKnexConnections"

export const RemoveUserMutation = async(_,{id}:{id: number},{})=>{
    const removeUser = await knx("users").del().where({id});
    if(removeUser){
        return true;
    }else{
        return false;
    }
}