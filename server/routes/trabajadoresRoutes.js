import express from 'express'; 
import { getAllTrabajadores, getTrabajador, createTrabajador, updateTrabajador, deleteTrabajador } from '../controllers/trabajadoresControllers.js';
//Enrutador que ofrece express 
const router = express.Router()

//Ruta para los metodo del controlador. 
router.get('/', getAllTrabajadores) 
router.get('/:id', getTrabajador) 
router.post('/', createTrabajador) 
router.put('/:id', updateTrabajador) 
router.delete('/:id', deleteTrabajador) 

export default router 