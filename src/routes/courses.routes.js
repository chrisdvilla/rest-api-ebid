import {Router} from 'express'
import {getCourses, createCourse, updateCourse, deleteCourse, getCourse} from '../controllers/courses.controller.js'

const router = Router()

router.get('/cursos', getCourses);

router.get('/cursos/:id', getCourse);

router.post('/cursos', createCourse);

router.patch('/cursos/:id', updateCourse);

router.delete('/cursos/:id', deleteCourse);

export default router