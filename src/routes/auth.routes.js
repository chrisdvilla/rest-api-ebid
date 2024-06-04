import {Router} from 'express'
const router = Router()

import {loginCtrl, registerCtrl} from '../controllers/auth.controllers.js'

//TODO: Login !
router.post('/login', loginCtrl)


//TODO: Registrar un usuario
router.post('/register', registerCtrl)


export default router