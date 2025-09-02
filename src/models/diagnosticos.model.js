const mongoose  = require("mongoose");

const diagnosticoSchema = new mongoose.Schema({

  
  title: {
      type:String,
      required: true
  },
  description: {
      type:String,
      required: true
  },
  price: {
      type: Number,
      required:true
  },
  
  
  
  }); export const diagnosModel = mongoose.model("diagnos", diagnosticoSchema);