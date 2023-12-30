import { AdminInput } from "src/types/Admin";
import bcrypt from "bcrypt";
import { knx } from "src/connections/CreateKnexConnections";

export const CreateAdminMeMutation = async (
  _,
  { input }: { input: AdminInput },
  {}
) => {
    const {first_name,last_name,email,password,phone_number} = input;
    const hasedpassword = bcrypt.hashSync(password, 12);
    const createAdminUser = await knx("admin").insert({
        first_name,
        last_name,
        email,
        password: hasedpassword,
        phone_number
    });
    if(createAdminUser){
        return true;
    }else{
        return false;
    }
};
