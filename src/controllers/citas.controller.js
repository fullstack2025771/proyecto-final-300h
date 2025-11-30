
import { citasModel} from "../models/citas.models.js";

export const createCita = async (request, response) => {

try {
    await citasModel.create(request.body);
    return response.status(201).json({
        "mensaje": "Cita creada correctamente"
    });

    
} catch (error) {
   console.log (error)
        return response.status(400).json({
        "mensaje": "Ocurrio un error al crear el servicio",
        "error": error.message ||error 
    })
    } 
}













