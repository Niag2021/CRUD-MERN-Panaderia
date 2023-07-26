//Importar Model 
import trabajadoresModel from "../models/trabajadoresModels.js"; 
//Definir los metodos para el crud. 
//Mostrar todos los registros. 
//Funcion asyncrona
export const getAllTrabajadores = async (req, res) => {
    try{
        const trabajadores = await trabajadoresModel.findAll()
        res.json(trabajadores)
    } catch (error){
        res.json( {message: error.message})
    }    
}

//Mostrar un registro. 
export const getTrabajador = async (req, res) => {
    try {
        const trabajador = await trabajadoresModel.findAll({
            where: { id:req.params.id }
        })
        res.json([0])
    } catch (error){
        res.json( {message: error.message})
    }
}

//Crear un registros. 
export const createTrabajador = async (req, res) => {
    try {
        await trabajadoresModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente."
        })
    } catch (error){
        res.json( {message: error.message})        
    }    
}

//Actualizar un registro. 
export const updateTrabajador = async(req, res) => {
    try {
        await trabajadoresModel.update(req.body, {
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
export const deleteTrabajador = async(req, res) => {
    try {
        await trabajadoresModel.destroy({
            where: {id:req.params.id}  
        })
        res.json({
            "message": "Registro eliminado correctamente."
        })
    } catch (error){
        res.json( {message: error.message})        
    }
}
