
import { productModel} from "../models/products.model.js";

export const postProduct = async (request, response) =>{
   
 try {
   
console.log(request.body)
    await productModel.create(request.body);
    
    return response.status(201).json({
        "mensaje": "Producto creado correctamente"
    });

 } catch (error) {
    console.log(error)
    return response.status(400).json({
        "mensaje": "Ocurrio un error al crear el producto",
        "error": error.message ||error 
    })
 }
}
// const _filename =fileURLToPath(import.meta.url);
 // const base = Path2D.basename(file.originalname, ext).replace(/\s+/g, "_");
   // cb(null, `${base}-${Date.now()}${ext}`);

export const getProductsById = async (request, response) =>{
     try {
        const id = request.params.id
        const product = await productModel.findById(id)
        return response.status(200).json({
                "mensaje": "Se encontro el producto",
                "data": product
            })
     } catch (error) {
        console.log(error)
        return response.status(500).json({
                "mensaje": "Ocurrio un error al mostrar los productos",
                "error": error.message || error
            })
     }
}
    

export const getAllProducts = async ( request,response) =>{
        try {
            const allProducts = await productModel.find();
            return response.status(200).json({
                "mensaje": "Se encontraron todos los productos",
                "data": allProducts
            })
        } catch (error) {
            return response.status(500).json({
                "mensaje": "Ocurrio un error al mostrar los productos",
                "error": error.message || error
            })
        }
}

export const putProductById =  async (request, response)=>{
    try {
        const idForUpdate = request.params.id;
        const dataForUpdate = request.body;
        await productModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
         return response.status(200).json({
            "mensaje": "Producto actualizado exitosamente"
        
    });
}    catch (error) {
    return response.status(500).json({
        "mensaje": "Ocurrio un error al actualizar el producto",
        "error": error.message || error
    })
}
}

export const deleteProductById = async (request, response)=>{
   try {
    const idForDelete = request.params.id;
    await productModel.findByIdAndDelete(idForDelete);
    return response.status(200).json({
        "mensaje": "Producto eliminado exitosamente"
    });

   } catch (error) {
    console.log(error)
    return response.status(500).json({
    "mensaje": "Ocurrio un error al eliminar el producto",
        "error": error.message || error
     })
}

}

