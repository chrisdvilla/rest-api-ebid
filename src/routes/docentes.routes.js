import {Router} from 'express'
import {getDocentes, createDocente, updateDocente, deleteDocente, getDocente} from '../controllers/docentes.controller.js'

const router = Router()

router.get('/docentes', getDocentes);

router.get('/docentes/:id', getDocente);

router.post('/docentes', createDocente);

router.patch('/docentes/:id', updateDocente);

router.delete('/docentes/:id', deleteDocente);

export default router