import mongoose from "mongoose";

const citaSchema = new mongoose.Schema({


   nombreDueno: {
    type: String,
    required: true
   },

    nombreMascota: {
        type: String,
        required: true
    },

     telefono: {
        type: Number,
        required: true

     },
     
     describeProblema: {
        type: String,
        required: true
     },

      date: {
         type: String,
         required: true
      } 
     

   
}); export const citasModel= mongoose.model("citas", citaSchema);