import { Sequelize } from "sequelize";
//Instancia de sequelize
const db = new Sequelize('Panaderia','root','Niag0542', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db
