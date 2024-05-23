import app  from './app.js'
import {PORT}  from './config.js'

import cors from 'cors'

const corsOptions = {
    origin: '*',//(https://your-client-app.com)
    optionsSuccessStatus: 200,
  };
 
//app.use(cors(corsOptions));
//app.use(cors());


app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Headers, *, Access-Control-Allow-Origin', 'Origin, X-Requested-with, Content_Type,Accept,Authorization','http://localhost:4200');
  if(req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
      return res.status(200).json({});
  }
  next();
});

app.listen(PORT)
console.log('Server running on port', PORT)