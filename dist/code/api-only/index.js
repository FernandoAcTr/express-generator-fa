const content = 
`import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { rateLimiterMiddleware } from './middlewares/rate_limiter'
import { handleErrorMiddleware } from './middlewares/error_handler'

//importin routes
import routes from './routes/index.routes'

//importing configs
import settings from './config/settings'

class Server {
  public app: express.Application

  constructor() {
    this.app = express()
    this.config()
    this.middlewares()
    this.routes()
  }

  config() {
    
  }

  middlewares() {
    this.app.use(rateLimiterMiddleware)
    this.app.use(morgan('dev'))
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
  }

  routes() {
    this.app.use(routes)
    this.app.use(handleErrorMiddleware)
  }

  start() {
    this.app.listen(settings.PORT, () => {
      console.log('Server listen on port ' + settings.PORT)
    })
  }
}

const server = new Server()
server.start()
`

module.exports = content
