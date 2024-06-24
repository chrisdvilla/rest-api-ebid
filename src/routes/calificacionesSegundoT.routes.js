import {Router} from 'express'
import {getCalificacionesSegundoT, getCalificacionSegundoT, createCalificacionSegundoT, updateCalificacionSegundoT, getCalificacionAlumnoSegundoT, getCalificacionDocenteSegundoT} from '../controllers/calificacionesSegundoT.controller.js'

const router = Router()

router.get('/calificacionSegundoT', getCalificacionesSegundoT);

router.get('/calificacionSegundoT/:id_alumno/:id_materia', getCalificacionSegundoT);

router.get('/calificacionSegundoT/:id_alumno/', getCalificacionAlumnoSegundoT);

router.get('/calificacionSegundoT/:id_docente/', getCalificacionDocenteSegundoT);

router.post('/calificacionSegundoT', createCalificacionSegundoT);

router.patch('/calificacionSegundoT/:id', updateCalificacionSegundoT);

export default router