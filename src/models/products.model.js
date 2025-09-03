const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({



    Image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["perros", "gatos", "otrasEspecies"],
        required: true
    }



});
export const producModel = mongoose.model("produc", productoSchema);
