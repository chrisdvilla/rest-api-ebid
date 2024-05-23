import {Router} from 'express'
import {getAdmitidos,  } from '../controllers/admitidos.controller.js'

const router = Router()

router.get('/admitidos', getAdmitidos);

//router.get('/admision/:id', getAdmision);

/* router.get('/admision/:id_alumno', getAdmision);

router.post('/admision', createAdmision);

router.patch('/admision/:id', updateAdmision);

router.delete('/admision/:id', deleteAdmision); */

export default router