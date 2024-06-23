import {Router} from 'express'
import {getCalificacionesPDos, getCalificacionPDos, createCalificacionPDos, updateCalificacionPDos, getCalificacionAlumnoPDos, getCalificacionDocentePDos} from '../controllers/calificacionesPeriodoDos.controller.js'

const router = Router()

router.get('/calificacionPeriodoDos', getCalificacionesPDos);

router.get('/calificacionPeriodoDos/:id_alumno/:id_materia', getCalificacionPDos);

router.get('/calificacionPeriodoDos/:id_alumno/', getCalificacionAlumnoPDos);

router.get('/calificacionPeriodoDos/:id_docente/', getCalificacionDocentePDos);

router.post('/calificacionPeriodoDos', createCalificacionPDos);

router.patch('/calificacionPeriodoDos/:id', updateCalificacionPDos);

export default router