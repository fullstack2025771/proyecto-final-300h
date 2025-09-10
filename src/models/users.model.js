
import mongoose from "mongoose";
const userSchema =new mongoose.Schema({

name: {
    type:String,
    required: true
},
email: {
    type:String,
    required: true
},
address: {
    type:String,
    required: true
},
telephone: {
    type: String,
    required: true
}, 
password: {
     type:String,
     required: true
},
role: {
    type: String,
    enum: ["admin","user"],
    required: true
},

 date: {
    type: Date,
    default:Date.now
 }




}); export const userModel = mongoose.model("users", userSchema);
//export default model("usuario", usuarioSchema);