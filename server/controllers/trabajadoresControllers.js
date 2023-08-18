//Importamos el modelo
import TrabajadoresModel from "../models/TrabajadoresModel.js"; 

//** Metodos para el CRUD**/

//Mostrar todos los registros. 
//>
export const getAllTrabajadores = async (req, res) => {
    try {
        const trabajadores = await TrabajadoresModel.findAll()
        res.json(trabajadores)        
    }catch (error){
        res.json({message: error.message})        
    }
}

//Mostrar un registro. 
export const getTrabajador = async (req, res) => {
    try {
        const trabajador = await TrabajadoresModel.findAll({
            where:{ id:req.params.id }})
        res.json(trabajador)
    }catch (error){
        res.json({message: error.message})        
    }
}

//Crear un registro. 
export const createTrabajador = async (req, res) => {
    try {
        await TrabajadoresModel.create(req.body)
        res.json({"message": "Registro creado correctamente."})
    }catch (error){
        res.json({message: error.message})        
    }
}

//Actualizar un registro. 
export const updateTrabajador = async(req, res) => {
    try {
        await TrabajadoresModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({
            "message": "Registro actualizado correctamente."
        })
    } catch (error){
        res.json( {message: error.message})
    }
}

//Eliminar un registro. 
export const deleteTrabajador = async (req, res) => {
    try {
        await TrabajadoresModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message": "Registro eliminado correctamente."
        })
    }catch (error){
        res.json({message: error.message})        
    }
}