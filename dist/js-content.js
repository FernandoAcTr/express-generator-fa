class Content {
  getIndexContent() {
    return `
    const express = require('express');
    const path = require('path');
    const handlerbars = require('express-handlebars');
    const cors = require('cors');
    const morgan = require('morgan');
    const settings = require('./config/settings')
      
    const app = express();
    
    //middlewares
    app.use(morgan('dev'));
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    
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
    app.listen(settings.PORT, () => console.log('Server listen on port ' + settings.PORT));`;
  }

  getSettingsContent() {
    return `
    module.exports = {
      PORT: process.env.PORT || 3000,
      secret: process.env.JWT_SECRET || 'somesecrettoken',
      DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/jwtpassport',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD,
      },
    };    
    `;
  }

  getRouterContent() {
    return `const { Router } = require('express');
    const router = Router();
    
    //importing all routes here
    
    router.get('/', (req, res) => res.json({ hello: 'Wordl' }));
    
    module.exports = router;
    `;
  }
}

module.exports = new Content();
