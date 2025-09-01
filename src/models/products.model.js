const mongoose  = require("mongoose");

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    
})