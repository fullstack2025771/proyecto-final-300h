import express from "express";
import { productRouter } from "./routes/products.routes.js";
import { userRouter } from "./routes/users.route.js";
import { loginRouter} from "./routes/login.routes.js";
import  servicioRouter from "./routes/servicios.route.js"
 import citaRouter from "./routes/citas.routes.js"

import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);//_filename= backend/src/config/multer.js cual esla ruta
const _dirname =path.dirname(_filename);//_dirname=

const servidor = express();
servidor.use(morgan("dev"));
servidor.use(express.json());

servidor.use(cors());
servidor.use (express.json()); //para usar formato json,enviar y recibir json en nuestro servidor
servidor.use ("/products", productRouter);
servidor.use ("/users", userRouter);
servidor.use ("/servicios", servicioRouter);
servidor.use("/uploads", express.static(path.join(_dirname, "src/uploads")))

servidor.use("/login", loginRouter)
servidor.use(citaRouter)

const frontendPath = path.join(_dirname, "..", "dist","Frontend","browser");
servidor.use(express.static(path.join(_dirname, "dist", "Frontend", "browser")));

servidor.get(/.*/, (req, res) => {
  res.sendFile(path.join(_dirname, "dist", "Frontend", "browser", "index.html"));
});

//  });
export default servidor;