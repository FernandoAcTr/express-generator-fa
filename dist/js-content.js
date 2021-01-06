class Content {
  getIndexContent() {
    return `
    const express = require('express');
    const path = require('path');
    const hbs = require('hbs');
    const cors = require('cors');
    const morgan = require('morgan');
    const settings = require('./config/settings')
    const router = require('./routes/router.routes');
    
    const app = express();
    
    //middlewares
    app.use(morgan('dev'));
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    
    //static files
    app.use(express.static(path.join(__dirname, 'public')));
    
    //Espress hbs engine
    app.set('view engine', 'hbs');
    hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
    
    //definig routes
    app.use(router)
    
    //init server
    app.listen(settings.PORT, () => console.log('Server listen on port ' + settings.PORT));`;
  }

  getSettingsContent() {
    return `
    class Settings {
      constructor() {
        this.PORT = process.env.PORT || 3000;
        this.ENVIROMENT = process.env.NODE_ENV || 'dev';
      }
    }
    
    module.exports = new Settings();`;
  }

  getRouterContent() {
    return `const express = require('express');
    const app = express();
    
    //importing all routes
    
    app.get('/', (req, res) => res.send('Hello World!'));
    
    module.exports = app;
    `;
  }
}

module.exports = new Content();
