import {Router} from 'express'
import {getCalificacionesPUno, getCalificacionPUno, createCalificacionPUno, updateCalificacionPUno, getCalificacionAlumnoPUno, getCalificacionDocentePUno} from '../controllers/calificacionesPeriodos.controller.js'

const router = Router()

router.get('/calificacionPeriodoUno', getCalificacionesPUno);

router.get('/calificacionPeriodoUno/:id_alumno/:id_materia', getCalificacionPUno);

router.get('/calificacionPeriodoUno/:id_alumno/', getCalificacionAlumnoPUno);

router.get('/calificacionPeriodoUno/:id_docente/', getCalificacionDocentePUno);

router.post('/calificacionPeriodoUno', createCalificacionPUno);

router.patch('/calificacionPeriodoUno/:id', updateCalificacionPUno);

export default router