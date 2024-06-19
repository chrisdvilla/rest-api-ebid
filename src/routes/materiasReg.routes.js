import {Router} from 'express'
import {getMateriasReg, getMateriasRegByAlumno, createMateriaReg, deleteMateriaReg} from '../controllers/materiasReg.controller.js'

const router = Router()

router.get('/materiasReg', getMateriasReg);

router.get('/materiasReg/:id_alumno', getMateriasRegByAlumno);

router.post('/materiasReg', createMateriaReg);

//router.delete('/materiasReg/:id', deleteMateriaReg);

router.delete('/materiasReg/:id_paralelo', deleteMateriaReg);

export default router