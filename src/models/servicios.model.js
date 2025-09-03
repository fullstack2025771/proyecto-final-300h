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
title: {
     type:String,
     required: true
},
image: {
    type:String,
}




}); export const serviModel = mongoose.model("servicios", serviciosSchema);