
import { productRouter } from "./routes/products.routes.js";
import { userRouter } from "./routes/users.route.js";

import express from "express";
import morgan from "morgan";

const servidor = express();
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.get('/', (request, response)=>{
    res.status(404).send("no encontrado");

});
servidor.use (express.json()); //para usar formato json,enviar y recibir json en nuestro servidor
servidor.use ("/products", productRouter);
servidor.use ("/users", userRouter)


export default servidor;