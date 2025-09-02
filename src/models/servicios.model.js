const mongoose = require("mongoose");
const serviciosSchema = new mongoose.Schema({

description: {
 type:String,
 required:true
},
price: {
    type: Number,
    required: true
},





}); export const serviModel = mongoose.model("servicios", serviciosSchema);