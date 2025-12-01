import express from "express";
import {login} from "../service/login.js";  


export const loginRouter = express.Router() ;
loginRouter.post("/", login);
// loginRouter.post("/",login);




