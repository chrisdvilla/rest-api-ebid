import app  from './app.js'
import {PORT}  from './config.js'

import cors from 'cors'

const corsOptions = {
    origin: '*',//(https://your-client-app.com)
    optionsSuccessStatus: 200,
  };
 
app.use(cors(corsOptions));

app.listen(PORT)
console.log('Server running on port', PORT)