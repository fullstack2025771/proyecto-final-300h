
import { userModel} from "../models/users.model.js"
import bcrypt from "bcrypt";

export const postUser = async (request, response) =>{
 try {
    let{name,email,address,telephone,password,role} = request.body;
     password = await bcrypt.hash(password, 10)
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
        const allUsers = await userModel.find();
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
export const getUserById = async (request, response) =>{
     try {
        const id = request.params.id
        const users = await userModel.findById(id)
        return response.status(200).json({
                "mensaje": "Se encontro el producto",
                "data": users
            })
     } catch (error) {
        console.log(error)
        return response.status(500).json({
                "mensaje": "Ocurrio un error al Actualizar el Usuario",
                "error": error.message || error
            })
     }
}
export const putUserById = async (request, response)=>{
    try {
        const idForUpdate = request.params.id;
        const dataForUpdate= request.body;
        if( dataForUpdate.password ){
            dataForUpdate.password = await bcrypt.hash( dataForUpdate.password , 10)
        }
        await userModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
        return response.status(200).json({
            "mensaje":"Usuario actualizado exitosamente"
        })

    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrio un error al actualizar el usuario",
            "error": error.message || error
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
