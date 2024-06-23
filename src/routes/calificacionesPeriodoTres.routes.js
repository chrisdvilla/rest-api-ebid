import {Router} from 'express'
import {getCalificacionesPTres, getCalificacionPTres, createCalificacionPTres, updateCalificacionPTres, getCalificacionAlumnoPTres, getCalificacionDocentePTres} from '../controllers/calificacionesPeriodoTres.controller.js'

const router = Router()

router.get('/calificacionPeriodoTres', getCalificacionesPTres);

router.get('/calificacionPeriodoTres/:id_alumno/:id_materia', getCalificacionPTres);

router.get('/calificacionPeriodoTres/:id_alumno/', getCalificacionAlumnoPTres);

router.get('/calificacionPeriodoTres/:id_docente/', getCalificacionDocentePTres);

router.post('/calificacionPeriodoTres', createCalificacionPTres);

router.patch('/calificacionPeriodoTres/:id', updateCalificacionPTres);

export default router