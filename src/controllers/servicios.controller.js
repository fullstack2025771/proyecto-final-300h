import { serviModel } from "../models/servicios.model.js";

export const postServi = async (request, response) => {
    try {
        await serviModel
    } catch (error) {
        
    }
}




//1.
const _filename = fileURLToPath(import.meta.url); //_filename = backend/src/config/multer.js
const _dirname = path.dirname(_filename); //_dirname = backend/src/config


const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    cb(null, `${base}-${Date.now()}${ext}`);//..