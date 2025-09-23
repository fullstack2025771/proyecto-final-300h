import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
export async function conexiondb(){
    try {
       await mongoose.connect(process.env.BD_URL)
       console.log("conectado base de datos");
    } catch (error) {
        console.log(error);
    }
}