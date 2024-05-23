import {Router} from 'express'
import {getDocumentos, getDocumento, createDocumento, updateDocumento, deleteDocumento, } from '../controllers/documents.controller.js'

const router = Router()

router.get('/documentos', getDocumentos);

router.get('/documentos/:id_alumno', getDocumento);

//router.get('/documentos/:id_alumno', getAdmision);

router.post('/documentos', createDocumento);

router.patch('/documentos/:id', updateDocumento);

router.delete('/documentos/:id', deleteDocumento);

export default router