import express from "express";
import { getAllTrabajadores, getTrabajador, createTrabajador, updateTrabajador, deleteTrabajador } from "../controllers/TrabajadoresControllers";

const router = express.Router()

router.get('/',getAllTrabajadores)
router.get('/:id',getTrabajador)
router.post('/',createTrabajador)
router.put('/:id',updateTrabajador)
router.delete('/:id',deleteTrabajador)

export default router