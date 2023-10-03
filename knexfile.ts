import dotenv from "dotenv"
import path from "path";
dotenv.config();

const config = {
    development:{
        client: "mysql2",
        connection: process.env.MY_CONNECTION_STRING,
        migration: {
            directory: path.join(__dirname,"src","migration")
        },
    },
};
export default config;