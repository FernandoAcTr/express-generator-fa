const content = 
`import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

//importin routes
import routes from './routes/index.routes';

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
    
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
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
server.start();
`

module.exports = content
