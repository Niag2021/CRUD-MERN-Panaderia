//Configuracion app principal/servidor principal. 
import express from 'express'
import colors from 'colors' 
import cors from 'cors' 
//Importamos la conexion a la BD. 
import db from "./database/db.js"
//Se importa el enrutador
import trabajadoresRoutes from './routes/trabajadoresRoutes.js' 
//Clase express para utilizar todos los metodos. 
const app = express()

app.use(cors())
app.use(express.json())
//Ruta como referencia
app.use('/trabajadores' , trabajadoresRoutes)

try{
    await db.authenticate()
    console.log('Conexion exitosa a la BD.')
}catch (error){
    console.log('El error de conexion es: ${error}')
}


//>
/*
    app.get('/', (req, res) => {
        res.send('Hola Mundo')    
    })
*/


app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000'.bgCyan)
})