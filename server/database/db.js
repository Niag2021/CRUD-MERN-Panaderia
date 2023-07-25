//Importar Sequelize 
import { Sequelize } from "sequelize";
//Instancia de sequelize
//Niag0542
//Al usar Modelo = Squelize
const db = new Sequelize('panaderia','root','', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db
