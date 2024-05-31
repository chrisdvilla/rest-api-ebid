import {Router} from 'express'
import {getHorarios, getHorario, createHorario, updateHorario, deleteHorario} from '../controllers/horarios.controller.js'

const router = Router()

router.get('/horarios', getHorarios);

router.get('/horarios/:id_set', getHorario);

router.post('/horarios', createHorario);

router.patch('/horarios/:id', updateHorario);

router.delete('/horarios/:id', deleteHorario);

export default router