import {Router} from 'express'
import {getAdmisiones, createAdmision, updateAdmision, deleteAdmision, getAdmision, } from '../controllers/admision.controller.js'

const router = Router()

router.get('/admision', getAdmisiones);

//router.get('/admision/:id', getAdmision);

router.get('/admision/:id_alumno', getAdmision);

router.post('/admision', createAdmision);

router.patch('/admision/:id', updateAdmision);

router.delete('/admision/:id', deleteAdmision);

export default router