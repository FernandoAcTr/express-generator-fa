const index = 
`const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const settings = require('./config/settings')
  
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//definig routes
app.use(require('./routes/index.routes'))

//init server
app.listen(settings.PORT, () => console.log('Server listen on port ' + settings.PORT));
`

module.exports = index
