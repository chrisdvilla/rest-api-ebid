import {Router} from 'express'
import {getCalificacionesPCuatro, getCalificacionPCuatro, createCalificacionPCuatro, updateCalificacionPCuatro, getCalificacionAlumnoPCuatro, getCalificacionDocentePCuatro} from '../controllers/calificacionesPeriodoCuatro.controller.js'

const router = Router()

router.get('/calificacionPeriodoCuatro', getCalificacionesPCuatro);

router.get('/calificacionPeriodoCuatro/:id_alumno/:id_materia', getCalificacionPCuatro);

router.get('/calificacionPeriodoCuatro/:id_alumno/', getCalificacionAlumnoPCuatro);

router.get('/calificacionPeriodoCuatro/:id_docente/', getCalificacionDocentePCuatro);

router.post('/calificacionPeriodoCuatro', createCalificacionPCuatro);

router.patch('/calificacionPeriodoCuatro/:id', updateCalificacionPCuatro);

export default router