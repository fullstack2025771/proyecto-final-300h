import express from "express";
import { productRouter } from "./routes/products.routes.js";
import { userRouter } from "./routes/users.route.js";
import { loginRouter} from "./routes/login.routes.js";
import  servicioRouter from "./routes/servicios.route.js"
 

import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);//_filename= backend/src/config/multer.js cual esla ruta
const _dirname =path.dirname(_filename);//_dirname=

const servidor = express();
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.get('/', (request, response)=>{
    res.status(404).send("no encontrado");



});
servidor.use(cors());
servidor.use (express.json()); //para usar formato json,enviar y recibir json en nuestro servidor
servidor.use ("/products", productRouter);
servidor.use ("/users", userRouter);
servidor.use ("/servicios", servicioRouter);
servidor.use("/uploads", express.static(path.join(_dirname, "src/uploads")))
servidor.use("/login", loginRouter)
export default servidor;