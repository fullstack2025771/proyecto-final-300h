import express from "express";
import morgan from "morgan";
const servidor = express();
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.get('/', (req, res)=>{
    res.status(404).send("no encontrado");

});
export default servidor;