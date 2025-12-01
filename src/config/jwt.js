import dotenv from "dotenv";
dotenv.config();
const key = process.env.SECRET_KEY;
import jsonwebtoken from "jsonwebtoken";
export const generateToken = (payload)=>{
 return new Promise((resolve, reject)=>{
     jsonwebtoken.sign(payload, key, {expiresIn:"1h"}, (error, token)=>{
        if(error){
            console.log(error)
            reject(new Error("Hubo un error al generar el jwt", error.message))
        }else {
            resolve(token);

        }
        })
 });
 
}
// 3.2 metodo para verificar un jwt
export const verifyToken = (token)=>{
    return new Promise((resolve, reject)=>{
        jsonwebtoken.verify(token, key, (error, decoded)=>{
            if(error){
                reject(new Error("Hubo un error al verificar el JWT ", error.message));
            }else {
                resolve(decoded);
            }
        })
    });
}







