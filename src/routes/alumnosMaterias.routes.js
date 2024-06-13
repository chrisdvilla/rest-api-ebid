import {Router} from 'express'
import {getAlumnoMat} from '../controllers/alumnosMaterias.controller.js'

const router = Router()

//router.get('/alumnos_materias', getAlumnosMat);

router.get('/alumnos_materias/:id_materia', getAlumnoMat);

//router.post('/alumnos_materias', createAlumnoMat);

//router.patch('/alumnos_materias/:id', updateAlumnoMat);

//router.delete('/alumnos_materias/:id', deleteAlumnoMat);

export default router