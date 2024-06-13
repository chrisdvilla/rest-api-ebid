import {Router} from 'express'
const router = Router()

import {setHabilitacion , getHabilitacion} from '../controllers/configuracion.controller.js'

//TODO: Login !
router.patch('/habilitacion/:id', setHabilitacion)

router.get('/habilitacion', getHabilitacion)


//TODO: Registrar un usuario
//router.post('/usuariosConfig', setUsuarios)


export default router