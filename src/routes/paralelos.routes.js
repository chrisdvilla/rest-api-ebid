import {Router} from 'express'
import {getParalelos, getParalelo, createParalelo, updateParalelo, deleteParalelo, } from '../controllers/paralelos.controller.js'

const router = Router()

router.get('/paralelos', getParalelos);

router.get('/paralelos/:id_materia', getParalelo);

//router.get('/documentos/:id_alumno', getAdmision);

router.post('/paralelos', createParalelo);

router.patch('/paralelos/:id', updateParalelo);

router.delete('/paralelos/:id', deleteParalelo);

export default router