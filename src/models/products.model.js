import mongoose from "mongoose";

const productSchema = new mongoose.Schema({



    image: {
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
export const productModel = mongoose.model("products", productSchema);
