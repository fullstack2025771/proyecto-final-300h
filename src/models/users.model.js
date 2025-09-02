
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




}); export const usuarModel = mongoose.model("usuario", usuarioSchema);
//export default model("usuario", usuarioSchema);