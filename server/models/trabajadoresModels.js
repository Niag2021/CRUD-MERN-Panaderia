//Importacion de la conexion a la BD 
import db from "../database/db.js"; 
//Importacion de sequelize 
import { DataTypes } from "sequelize";
//Definir la conexion a la BD. 
const TrabajadoresModel = db.define('trabajadores', {
    nombre: { type:DataTypes.STRING },
    apellidoPaterno: { type:DataTypes.STRING },
    apellidoMaterno: { type:DataTypes.STRING },
    edad: { type:DataTypes.NUMBER },
})

export default TrabajadoresModel
