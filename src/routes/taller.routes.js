import {Router} from 'express'
import {getTallers, createTaller, updateTaller, deleteTaller, getTaller, getTalleresLista } from '../controllers/taller.controller.js'

const router = Router()

router.get('/taller', getTallers);

//router.get('/taller/:id', getAdmision);

router.get('/taller/:id_alumno', getTaller);

router.post('/taller', createTaller);

router.patch('/taller/:id', updateTaller);

router.delete('/taller/:id', deleteTaller);

router.get('/tallerLista', getTalleresLista);

export default router