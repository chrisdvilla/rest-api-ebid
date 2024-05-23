import express from 'express'
import coursesRoutes from './routes/courses.routes.js'
import documentsRoutes from './routes/documents.routes.js'
import admitidosRoutes from './routes/admitidos.routes.js'
import admisionRoutes from './routes/admision.routes.js'
import alumnosRoutes from './routes/alumnos.routes.js'
import docentesRoutes from './routes/docentes.routes.js'
import salasRoutes from './routes/salas.routes.js'
import indexRoutes from './routes/index.routes.js'

const cors = require('cors');

const app = express()
app.use(cors());

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Headers, *, Access-Control-Allow-Origin', 'Origin, X-Requested-with, Content_Type,Accept,Authorization','http://localhost:4200');
  if(req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
      return res.status(200).json({});
  }
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