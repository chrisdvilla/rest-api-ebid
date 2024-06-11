import express from 'express'
import coursesRoutes from './routes/courses.routes.js'
import documentsRoutes from './routes/documents.routes.js'
import admitidosRoutes from './routes/admitidos.routes.js'
import admisionRoutes from './routes/admision.routes.js'
import alumnosRoutes from './routes/alumnos.routes.js'
import docentesRoutes from './routes/docentes.routes.js'
import salasRoutes from './routes/salas.routes.js'
import paralelosRoutes from './routes/paralelos.routes.js'
import indexRoutes from './routes/index.routes.js'
import horariosRoutes from './routes/horarios.routes.js'
import authRoutes from './routes/auth.routes.js'
import materiasDocRoutes from './routes/materiasDoc.routes.js'
import materiasRegRoutes from './routes/materiasReg.routes.js'


const app = express();


app.all('*', function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH');

   if (req.method == 'OPTIONS') {
       res.send(200);
   } else {
       next();
   }
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
app.use('/api',paralelosRoutes)
app.use('/api',horariosRoutes)
app.use('/api',authRoutes)
app.use('/api',materiasDocRoutes)
app.use('/api',materiasRegRoutes)

app.use((req, res, next) => {
   res.status(404).json({
      message: 'endpont not found'
   })
})

export default app