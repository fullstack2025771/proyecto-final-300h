import usuarModel from "../models/users.model.js";
const controllerUser = {
    crearUsuario: async (
        req,res
    )=>{
try {
    
    const nuevoUsuario=new usuarModel({
         nombre,email,address,telephone,password 
    });
    const usuarioCreado = await nuevoUsuario.save();
    if (usuarioCreado._id){
        res.json(
            {
              respuesta:"usuarioCreado",
              data:usuarioCreado._id,  
            }
        );
    }
    
    
} catch (error) {
    
}

    }
    
    
}