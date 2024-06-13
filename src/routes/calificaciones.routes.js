import {Router} from 'express'
import {getCalificaciones, getCalificacion, createCalificacion, updateCalificacion} from '../controllers/calificaciones.controller.js'

const router = Router()

router.get('/calificaciones', getCalificaciones);

router.get('/calificaciones/:id_alumno/:id_materia', getCalificacion);

router.post('/calificaciones', createCalificacion);

router.patch('/calificaciones/:id', updateCalificacion);

export default router