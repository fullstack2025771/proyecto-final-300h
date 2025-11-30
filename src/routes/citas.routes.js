import express from "express";
import { createCita } from "../controllers/citas.controller.js";



const citaRouter = express.Router();
citaRouter.post("/citas/crear", createCita );







export default citaRouter  