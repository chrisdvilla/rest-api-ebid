import {Router} from 'express'
import {getCarrerasMat, getCarreraMat, createCarreraMat, updateCarreraMat, deleteCarreraMat} from '../controllers/carrerasMat.controller.js'

const router = Router()

router.get('/carrerasMat', getCarrerasMat);

router.get('/carrerasMat/:id_set', getCarreraMat);

router.post('/carrerasMat', createCarreraMat);

router.patch('/carrerasMat/:id', updateCarreraMat);

router.delete('/carrerasMat/:id', deleteCarreraMat);

export default router