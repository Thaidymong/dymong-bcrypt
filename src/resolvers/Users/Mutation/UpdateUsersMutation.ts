import { knx } from "src/connections/CreateKnexConnections";
import { UsersInput } from "src/types/Users";
import bcrypt from "bcrypt";

export default async function UpdateUsersMutation(_,{id,input}: {id:number, input: UsersInput},{}){
    const { first_name, last_name, email, password } = input;
    const hashPassword = bcrypt.hashSync(password, 12);
    const updateUser = await knx("users").update({
        first_name,
        last_name,
        email,
        password: hashPassword,
    }).where({id});
    if (updateUser) {
      return true;
    } else {
      return false;
    }
    
}