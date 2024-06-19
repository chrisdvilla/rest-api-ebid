import {Router} from 'express'
import {getMaterias, getAllMaterias, getMateriasCarrera, getMateriasHorarios } from '../controllers/materiasDoc.controller.js'

const router = Router()

router.get('/materias/:id_docente', getMaterias);
router.get('/materias/', getAllMaterias);
router.get('/materiasCarrera/:carrera', getMateriasCarrera);
router.get('/materiasHorarios/:id_paralelo', getMateriasHorarios);


export default router