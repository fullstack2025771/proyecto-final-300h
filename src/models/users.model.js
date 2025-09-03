
const mongoose = require("mongoose");
const usuarioSchema =new mongoose.Schema({

nombre: {
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
    type: Number,
    required: true
}, 
password: {
     type:String,
     required: true
},
role: {
    type: String,
    enum: ["admon","user"],
    required: true
},
date: {
    type: Date,
    
    default: Date.now
},  




}); export const usuarioModel = mongoose.model("users", usuarioSchema);
//export default model("usuario", usuarioSchema);