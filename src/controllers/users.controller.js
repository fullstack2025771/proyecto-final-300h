
import { userModel} from "../models/users.model.js"
import bcryptjs from "bcryptjs";

export const postUser = async (request, response) =>{
 try {
    const {name,email,address,telephone,password,role} = request.body;
     const codedPassword = await bcrypt.hash(password, 10)
    await userModel.create({
        name,
        email,
        address,
        telephone,
        password,
        role
    });
     
       return response.status(201).json({
        "mensaje": "Usuario creado correctamente"
       });

 } catch (error) {
    return response.status(400).json({
        "mensaje": "Ocurrio un error al crear el usuario",
        "error": error.message ||error 
    })
 }

}
export const getUsers = async ( request,response) =>{
      try {
        const getUsers = await userModel.find();
        return response.status(200).json({
            "mensaje":"Peticion exitosa",
            "data": allUsers
        })

      } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrio un error al mostrar el usuario",
            "error": error.message || error
        })
      }

}
export const putUserById = async (request, response)=>{
    try {
        const idForUpdate = request.params.id;
        const dataForUpdate= request.body;
        await userModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
        return response.status(200).json({
            "mensaje":"Usuario actualizado exitosamente"
        })

    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrio un error al actualizar el usuario",
            "error": error.mensage || error
        })
    }


}
export const deleteUserById = async (request, response)=>{
    try {
        const idForDelete = request.params.id;
        await userModel.findByIdAndDelete(idForDelete);
        return response.status(200).json({
            "mensaje": "Usuario eliminado exitosamente"
        })
    } catch (error) {
        return response.status (500).json({
            "mensaje": "Ocurrio un error al eliminar el usuario",
            "error": error.message || error
        })
    }
}

export const deleteUserByemail = async (request,response)=>{
    try {
        const emailForDelete = request.params.email;
        await userModel.findOneAndDelete({
            email:emailForDelete
     
        })
        return response .status(200).json({
            "mensaje": "Usuario eliminado exitosamente"
        })
    } catch (error) {
        return response.status (500).json({
            "mensaje": "Ocurrio un error al eliminar el usuario",
            "error": error.message || error
        })
    }
    }
