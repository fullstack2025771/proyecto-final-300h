import "dotenv/config";

import servidor from "./servidor.js";
import { conexiondb } from "./config/db.js";

conexiondb()




servidor.listen(3000,()=>{
    console.log("El servidor esta escuchando en el puerto 3000");
});