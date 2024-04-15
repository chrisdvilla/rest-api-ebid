import {Router} from 'express'
import {getSalas, createSala, updateSala, deleteSala, getSala} from '../controllers/salas.controller.js'

const router = Router()

router.get('/salas', getSalas);

router.get('/salas/:id', getSala);

router.post('/salas', createSala);

router.patch('/salas/:id', updateSala);

router.delete('/salas/:id', deleteSala);

export default router