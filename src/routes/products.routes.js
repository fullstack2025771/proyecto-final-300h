import { productModel } from "../models/products.model.js";

import express from "express";
import { postProduct, getAllProducts, putProductById, deleteProductById } from "../controllers/products.controller.js";

export const productRouter = express.Router();

productRouter.post("/crear", postProduct);


productRouter.get("/mostrar", getAllProducts);


productRouter.put("/actualizar/:id", putProductById);


productRouter.delete("/eliminar/:id", deleteProductById);