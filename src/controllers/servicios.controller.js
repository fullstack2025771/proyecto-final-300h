import { serviModel } from "../models/servicios.model.js";

export const postSer = async (request, response) => {
    try {
       if (!request.file) {
        return response.status(400).json({
            "mensaje":"Debe subir un archivo de imagen"
        });
       }
     const newServicio = {
        ...request.body,
        image: `/uploads/${request.file.filename}`
     }

     await serviModel.create(newServicio);
     return response.status(201).json({
        "mensaje": "Servicio creado correctamente"
     });
    } catch (error) {
        return response.status(400).json({
        "mensaje": "Ocurrio un error al crear el servicio",
        "error": error.message ||error 
    })
    }
}

//1.
//const _filename = fileURLToPath(import.meta.url); //_filename = backend/src/config/multer.js
//const _dirname = path.dirname(_filename); //_dirname = backend/src/config


// const ext = path.extname(file.originalname);
//     const base = path.basename(file.originalname, ext).replace(/\s+/g, "_");
//     cb(null, `${base}-${Date.now()}${ext}`);//..



export const getAllServicios = async (request, response) => {
   try {
     const allServicios = await serviModel.find();
                return response.status(200).json({
                    "mensaje": "Se encontraron todos los servicios",
                    "data": allServicios
   });
   } catch (error) {
        return response.status(500).json({
                "error": error.message || error
   })
} }   

export const putSerById = async (request, response) => {
    try {
        const idForUpdate = request.params.id;
               const dataForUpdate = request.body;
               await serviModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
                return response.status(200).json({
                   "mensaje": "Servicio actualizado exitosamente" 

                });             

    } catch (error) {
      return response.status(500).json({
        "mensaje": "Ocurrio un error al actualizar el producto",
        "error": error.message || error
      })  
    } 
}

export const deleteSerById = async (request, response) => {
 try {
    const idForDelete = request.params.id;
        await serviModel.findByIdAndDelete(idForDelete);
        return response.status(200).json({
            "mensaje": "Servicio eliminado exitosamente"
        });

    } catch (error) {
    return response.status(500).json({
    "mensaje": "Ocurrio un error al eliminar el servicio",
        "error": error.message || error
     })
    }
}

