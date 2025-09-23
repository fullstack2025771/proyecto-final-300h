 import multer from "multer";
 import path from "path";// modulo de node
 import fs from "fs";// modulo de node
 import { fileURLToPath } from "url";


// Desarrollo de las funcionalidades
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

//Crear una caarpeta donde se guarden los archivos subidos
const UPLOADS_FOLDER = path.join(_dirname, "../uploads");

// si no existe mi carpeta UPLOADS
   if(!fs.existsSync(UPLOADS_FOLDER)){
     fs.mkdirSync(UPLOADS_FOLDER)
   }

  // 2. Especificar como vamos a guardar los archivos
   const storage = multer.diskStorage({
        destination: (req, file, cb) => {
         //donde vamos a guardar el archivo
            cb(null, UPLOADS_FOLDER);
        },
        filename:(req, file, cb) => {
            const ext = path.extname(file.originalname); // extension
         const base = path.basename(file.originalname, ext).replace(/\s+/g, "_");
        
            cb(null, `${base}-${Date.now()}${ext}`);
        }
  });


   //3. Que tipo de archivos vamos a recibir -->filtros
 const fileFilter = (req, file, cb) => {
    const allowed =["image/gif","image/jpeg","image/png","image/svg+xml","image/webp"];

     if (allowed. includes(file.mimetype)){
       cb(null, true) // si el archivo es permitidom lo guarde en la carpeta uploads
     }else { 
       cb(new Error("Archivo no permitido"), false);
     }
 }
   //4. definir limites -tamaño de archivos
 const limits ={
  fileSize: 5*1024*1024 // 5MB
 }
 //.5 Exportar esas caracteridticas
// 6. El unico obligatorio es storage
 export const upload = multer({
 storage, fileFilter, limits
 });