import {Router} from 'express'
import {getMaterias, getAllMaterias } from '../controllers/materiasDoc.controller.js'

const router = Router()

router.get('/materias/:id_docente', getMaterias);
router.get('/materias/', getAllMaterias);



export default router