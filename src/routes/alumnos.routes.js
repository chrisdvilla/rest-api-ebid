import {Router} from 'express'
import {getAlumnos, createAlumno, updateAlumno, deleteAlumno, getAlumno, getAlumnoInfo} from '../controllers/alumnos.controller.js'

const router = Router()

router.get('/alumnos', getAlumnos);

router.get('/alumnos/:id', getAlumno);

router.post('/alumnos', createAlumno);

router.patch('/alumnos/:id', updateAlumno);

router.delete('/alumnos/:id', deleteAlumno);

router.get('/alumnos_info/:id_alumno', getAlumnoInfo);

export default router