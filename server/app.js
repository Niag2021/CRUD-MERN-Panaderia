import express from "express";
import cors from "cors";
import colors from "colors";
//Importamos la conexion a la BD
import db from "./database/db.js"

import trabajadoresRoutes from "./routes/routes.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use('/trabajadores', trabajadoresRoutes)

//Definir la conexion
try {
    await db.authenticate()
    console.log('Conexion exitosa a la BD.'.bgGreen)
} catch (error) {
    console.log('El error de conexion es: ${error}'.bgRed)
    
}

/*
app.get('/', (req,res) => {
    res.send('Hola Mundo')
})
*/

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/'.bgGreen)
})