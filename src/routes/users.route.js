import express from "express"
import {postUser, getUsers, putUserById, deleteUserById, deleteUserByemail } from "../controllers/users.controller.js";

export const userRouter = express.Router();

userRouter.post("/crear", postUser);


userRouter.get("/mostrar", getUsers);


userRouter.put("/actualizar/:id",putUserById);


userRouter.delete("/eliminar/:id", deleteUserById);
userRouter.delete("/eliminaremail/:email", deleteUserByemail );
