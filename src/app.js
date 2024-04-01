import express from 'express'
import alumnosRoutes from './routes/alumnos.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',alumnosRoutes)

app.use((req, res, next) => {
   res.status(404).json({
      message: 'endpont not found'
   })
})

export default app