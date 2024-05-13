import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"


console.log(process.env.MONGO_URI)
console.log(DB_NAME)
async function connectDb(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}${DB_NAME}`)
        console.log("MongoDb Connection Successful :" + connectionInstance.connection.host);
    } catch (error) {
        console.error("MongoDb Connection failed " + error);
        process.exit(1);
    }
}

export default connectDb;