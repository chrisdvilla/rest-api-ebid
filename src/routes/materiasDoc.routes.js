import {Router} from 'express'
import {getMaterias, getAllMaterias, getMateriasCarrera } from '../controllers/materiasDoc.controller.js'

const router = Router()

router.get('/materias/:id_docente', getMaterias);
router.get('/materias/', getAllMaterias);
router.get('/materiasCarrera/:carrera', getMateriasCarrera);


export default router