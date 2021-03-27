const index = 
`const express = require('express');
const path = require('path');
const handlerbars = require('express-handlebars');
const morgan = require('morgan');
const csurf = require('csurf');
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')
const settings = require('./config/settings')
const locals = require('./middlewares/locals')
  
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash())
app.use(
  session({
    name: 'session_name',
    secret: settings.SECRET,
    resave: false,
    saveUninitialized: false,
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(csurf());
app.use(locals)

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Espress hbs engine
app.set('views', path.join(__dirname, 'views'));
app.engine(
  '.hbs',
  handlerbars({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
  })
);
app.set('view engine', 'hbs');

//definig routes
app.use(require('./routes/index.routes'))

//init server
app.listen(settings.PORT, () => console.log('Server listen on port ' + settings.PORT));
`

module.exports = index
