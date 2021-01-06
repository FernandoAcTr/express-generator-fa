class Content {
  getIndexContent() {
    return `
    import express from 'express';
    import morgan from 'morgan';
    import cors from 'cors';
    import hbs from 'hbs';
    import path from 'path';
    
    //importin routes
    import routes from './routes/router.routes';
    
    //importing configs
    import settings from './config/settings';
    
    class Server {
      public app: express.Application;
    
      constructor() {
        this.app = express();
        this.config();
        this.middlewares();
        this.routes();
      }
    
      config() {
        //Espress hbs engine
        this.app.set('view engine', 'hbs');
        hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
      }
    
      middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(express.static(path.join(__dirname, 'public')));
      }
    
      routes() {
        this.app.use(routes);
      }
    
      start() {
        this.app.listen(settings.PORT, () => {
          console.log('Server listen on port ' + settings.PORT);
        });
      }
    }
    
    const server = new Server();
    server.start();`;
  }

  getSettingsContent() {
    return `
    class Settings {
      public PORT: any;
      public ENVIRONMENT: string;
    
      constructor() {
        this.PORT = process.env.PORT || 3000;
        this.ENVIRONMENT = process.env.NODE_ENV || 'dev';
      }
    }
    
    export default new Settings();
    `;
  }

  getRouterContent() {
    return `
    import express from 'express'
    const app = express();
    
    //importing all routes
    
    app.get('/', (req, res) => res.send('Hello World!'));
    
    export default app;
    `;
  }
}

module.exports = new Content();
