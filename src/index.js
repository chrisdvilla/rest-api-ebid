import app  from './app.js'
import {PORT}  from './config.js'

import cors from 'cors'

const corsOptions = {
    origin: '*',//(https://your-client-app.com)
    optionsSuccessStatus: 200,
  };
 
//app.use(cors(corsOptions));
//app.use(cors());

/* app.use((req, res, next) => {

  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next()

}); */

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
      res.send(200);
  } else {
      next();
  }
});

app.listen(PORT)
console.log('Server running on port', PORT)