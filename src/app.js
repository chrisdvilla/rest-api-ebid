import express from 'express'
import coursesRoutes from './routes/courses.routes.js'
import documentsRoutes from './routes/documents.routes.js'
import admitidosRoutes from './routes/admitidos.routes.js'
import admisionRoutes from './routes/admision.routes.js'
import alumnosRoutes from './routes/alumnos.routes.js'
import docentesRoutes from './routes/docentes.routes.js'
import salasRoutes from './routes/salas.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express();

/* const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
   methods: "GET, POST"
 }
 
 app.use(cors(corsOptions)); */

 app.use((req, res, next) => {
   res.append('Access-Control-Allow-Origin', ['*']);
   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   //res.append('Access-Control-Allow-Headers', 'Content-Type');
   next();
});


app.use(express.json())

app.use(indexRoutes)
app.use('/api',alumnosRoutes)
app.use('/api',docentesRoutes)
app.use('/api',salasRoutes)
app.use('/api',admisionRoutes)
app.use('/api',admitidosRoutes)
app.use('/api',documentsRoutes)
app.use('/api',coursesRoutes)

app.use((req, res, next) => {
   res.status(404).json({
      message: 'endpont not found'
   })
})

export default app