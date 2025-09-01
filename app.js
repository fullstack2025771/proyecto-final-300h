  
//1.importar dependencias necesarias

  import express from 'express';
   import dotenv from "dotenv";


//2.configurar las dependencias que necesitemos
const app = express();
dotenv.config();

const port = process.env.PORT;



//3. funcionalidades que se necesiten agregar
app.get('/', (req, res) => {
    res.send("Server works!")
  
})



// 3. levantar el servidor
app.listen(port, ()=>{
    console.log(`El servidor esta ejecutandose en https://localhost:${port}`)
});