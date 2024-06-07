import {Router} from 'express'
const router = Router()

import {loginCtrl, registerCtrl, getUserAlumno, updateUserAlumno, getUserDocente, updateUserDocente} from '../controllers/auth.controllers.js'

//TODO: Login !
router.post('/login', loginCtrl)


//TODO: Registrar un usuario
router.post('/register', registerCtrl)


router.get('/userAlumno/:id_alumno', getUserAlumno);

router.patch('/userAlumno/:id', updateUserAlumno);

router.get('/userDocente/:id_docente', getUserDocente);

router.patch('/userDocente/:id', updateUserDocente);


export default router