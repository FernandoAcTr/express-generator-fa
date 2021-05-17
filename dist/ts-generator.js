require('colors')
const fs = require('fs')
var shell = require('shelljs')

//import content
const indexContent = require('./code/index')
const settingsContent = require('./code/settings')
const routerContent = require('./code/router')
const localsContent = require('./code/locals-middleware')
const ormContent = require('./code/orm')
const envContent = require('./code/env')
const gitContent = require('./code/gitIgnore')
const tsConfig = require('./code/tsconfig')
const database = require('./code/database')

//apionly content
const indexApiContent = require('./code/api-only/index')
const validateBody = require('./code/api-only/validate-body')
const errorHandler = require('./code/api-only/error-handler')
const expressValidators = require('./code/api-only/express-validators')
const rateLimiter = require('./code/api-only/rate-limiter')

class Generator {
  init() {
    this.createDirStructure()
    fs.writeFileSync('./src/index.ts', indexContent)
    fs.writeFileSync('./src/config/settings.ts', settingsContent)
    fs.writeFileSync('./src/routes/index.routes.ts', routerContent)
    fs.writeFileSync('./src/middlewares/locals.ts', localsContent)
    fs.writeFileSync('./src/database/database.ts', database)
    fs.writeFileSync('./.env', envContent)
    fs.writeFileSync('./.gitignore', gitContent)
    fs.writeFileSync('./README.md', '')

    fs.writeFileSync('./src/views/index.hbs', '')
    fs.writeFileSync('./src/views/layouts/main.hbs', '')

    console.log('================= Installing modules ================='.yellow)
    shell.exec(
      'npm i express express-session dotenv passport passport-local morgan express-handlebars csurf typeorm connect-flash'
    )

    console.log(
      '================= Installing dev modules ================='.yellow
    )
    shell.exec(
      'npm i -D @types/express @types/express-session @types/passport @types/passport-local @types/morgan @types/express-handlebars @types/csurf @types/connect-flash @types/node typescript tsc-watch concurrently nodemon ts-node'
    )
    console.log('================= Init tsc ================='.yellow)
    shell.exec('tsc --init')
    fs.writeFileSync('tsconfig.json', tsConfig)
    shell.exec(
      `npm set-script watch-ts 'tsc-watch --onSuccess "node build/index"'`
    )
    shell.exec(
      'npm set-script watch-hbs "mkdir build & nodemon -e hbs -w src/views -x cp -r src/views build"'
    )
    shell.exec('npm set-script clean "rm -rf build & rm -rf node_modules"')
    shell.exec('npm set-script build "tsc && cp -r src/views build"')
    shell.exec('npm set-script start "node build"')
    shell.exec(`npm set-script dev 'concurrently "npm:watch-*"'`)
    shell.exec(
      'npm set-script migration:run "ts-node ./node_modules/typeorm/cli.js migration:run"'
    )
    shell.exec(
      'npm set-script migration:revert "ts-node ./node_modules/typeorm/cli.js migration:revert"'
    )
    shell.exec(
      'npm set-script migration:generate "ts-node --transpile-only ./node_modules/typeorm/cli.js migration:generate --name"'
    )
  }

  initForApi() {
    this.createDirStructure(false)
    fs.writeFileSync('./src/index.ts', indexApiContent)
    fs.writeFileSync('./src/config/settings.ts', settingsContent)
    fs.writeFileSync('./src/routes/index.routes.ts', routerContent)
    fs.writeFileSync('./src/middlewares/validate_body.ts', validateBody)
    fs.writeFileSync('./src/middlewares/error_handler.ts', errorHandler)
    fs.writeFileSync('./src/middlewares/rate_limiter.ts', rateLimiter)
    fs.writeFileSync(
      './src/middlewares/express_validators.ts',
      expressValidators
    )
    fs.writeFileSync('./src/database/database.ts', database)
    fs.writeFileSync('./ormconfig.json', ormContent)
    fs.writeFileSync('./.env', envContent)
    fs.writeFileSync('./.gitignore', gitContent)
    fs.writeFileSync('./README.md', '')

    console.log('================= Installing modules ================='.yellow)
    shell.exec(
      'npm i express express-validator cors bcrypt jsonwebtoken dotenv passport passport-jwt morgan helmet rate-limiter-flexible'
    )

    console.log(
      '================= Installing dev modules ================='.yellow
    )
    shell.exec(
      'npm i -D @types/express @types/cors @types/bcrypt @types/jsonwebtoken @types/passport @types/passport-jwt @types/morgan @types/node typescript tsc-watch ts-node typeorm'
    )
    console.log('================= Init tsc ================='.yellow)
    shell.exec('tsc --init')
    fs.writeFileSync('tsconfig.json', tsConfig)
    shell.exec(`npm set-script dev 'tsc-watch --onSuccess "node build/index"'`)
    shell.exec('npm set-script clean "rm -rf build & rm -rf node_modules"')
    shell.exec('npm set-script build "tsc"')
    shell.exec('npm set-script start "node build"')
    shell.exec(
      'npm set-script migration:run "ts-node --transpile-only ./node_modules/typeorm/cli.js migration:run"'
    )
    shell.exec(
      'npm set-script migration:revert "ts-node --transpile-only ./node_modules/typeorm/cli.js migration:revert"'
    )
    shell.exec(
      'npm set-script migration:generate "ts-node --transpile-only ./node_modules/typeorm/cli.js migration:generate --name"'
    )
  }

  createDirStructure(webapp = true) {
    fs.mkdirSync('./src', {
      recursive: true,
    })

    fs.mkdirSync('./src/database', {
      recursive: true,
    })

    fs.mkdirSync('./src/database/migrations', {
      recursive: true,
    })

    fs.mkdirSync('./src/middlewares', {
      recursive: true,
    })

    fs.mkdirSync('./src/entities', {
      recursive: true,
    })

    fs.mkdirSync('./src/controllers', {
      recursive: true,
    })

    fs.mkdirSync('./src/routes', {
      recursive: true,
    })

    fs.mkdirSync('./src/config', {
      recursive: true,
    })

    if (webapp) {
      fs.mkdirSync('./src/views/partials', {
        recursive: true,
      })

      fs.mkdirSync('./src/views/layouts', {
        recursive: true,
      })

      fs.mkdirSync('./public/css', {
        recursive: true,
      })

      fs.mkdirSync('./public/js', {
        recursive: true,
      })
    }
  }
}

module.exports = new Generator()
