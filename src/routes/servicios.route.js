 import express from  "express";
 import { postSer, getAllServicios, putSerById, deleteSerById } from "../controllers/servicios.controller.js";
 import { upload } from "../config/multer.js";
 import { auth } from "../middleware/auth.js"





 const servicioRouter = express.Router();

servicioRouter.post("/crear", auth("admin"), upload.single("image"), postSer);


servicioRouter.get("/mostrar", getAllServicios);


servicioRouter.put("/actualizar/:id", auth("admin") , putSerById);


servicioRouter.delete("/eliminar/:id", auth("admin"), deleteSerById);

export default servicioRouter