require('colors')
const fs = require('fs')
var shell = require('shelljs')

//import content
const indexContent = require('./code/ts/index')
const settingsContent = require('./code/ts/settings')
const routerContent = require('./code/ts/router')
const localsContent = require('./code/ts/locals-middleware')
const ormContent = require('./code/ts/orm')
const envContent = require('./code/ts/env')
const gitContent = require('./code/ts/gitIgnore')

//apionly content
const indexApiContent = require('./code/ts/api-only/index')
const validateBody = require('./code/ts/api-only/validate-middleware')

class Generator {
  init() {
    this.createDirStructure()
    fs.writeFileSync('./src/index.ts', indexContent)
    fs.writeFileSync('./src/config/settings.ts', settingsContent)
    fs.writeFileSync('./src/routes/index.routes.ts', routerContent)
    fs.writeFileSync('./src/middlewares/locals.ts', localsContent)
    fs.writeFileSync('./ormconfig.json', ormContent)
    fs.writeFileSync('./.env', envContent)
    fs.writeFileSync('./.gitignore', gitContent)
    fs.writeFileSync('./README.md', '')

    fs.writeFileSync('./src/views/index.hbs', '')
    fs.writeFileSync('./src/views/layouts/main.hbs', '')
    fs.writeFileSync('./src/models/User.ts', '')

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
    shell.exec(
      `npm set-script watch-ts 'tsc-watch --onSuccess "node build/index"'`
    )
    shell.exec(
      'npm set-script watch-hbs "nodemon -e hbs -w src/views -x cp -r src/views build"'
    )
    shell.exec('npm set-script clean "rm -rf build & rm -rf node_modules"')
    shell.exec('npm set-script build "tsc && cp -r src/views build"')
    shell.exec('npm set-script start "node build"')
    shell.exec(`npm set-script dev 'concurrently "npm:watch-*"'`)
    shell.exec(
      'npm set-script migration:run "ts-node ./node_modules/typeorm/cli.js migration:run'
    )
    shell.exec(
      'npm set-script migration:revert "ts-node ./node_modules/typeorm/cli.js migration:revert'
    )
  }

  initForApi() {
    this.createDirStructure(false)
    fs.writeFileSync('./src/index.ts', indexApiContent)
    fs.writeFileSync('./src/config/settings.ts', settingsContent)
    fs.writeFileSync('./src/routes/index.routes.ts', routerContent)
    fs.writeFileSync('./src/middlewares/validateBody.ts', validateBody)
    fs.writeFileSync('./.env', envContent)
    fs.writeFileSync('./.gitignore', gitContent)
    fs.writeFileSync('./README.md', '')

    fs.writeFileSync('./src/models/User.ts', '')

    console.log('================= Installing modules ================='.yellow)
    shell.exec(
      'npm i express express-validator cors jsonwebtoken dotenv passport passport-jwt morgan typeorm'
    )

    console.log(
      '================= Installing dev modules ================='.yellow
    )
    shell.exec(
      'npm i -D @types/express @types/cors @types/jsonwebtoken @types/passport @types/passport-jwt @types/morgan @types/node typescript tsc-watch'
    )
    console.log('================= Init tsc ================='.yellow)
    shell.exec('tsc --init')
    shell.exec(`npm set-script dev 'tsc-watch --onSuccess "node build/index"'`)
    shell.exec('npm set-script clean "rm -rf build & rm -rf node_modules"')
    shell.exec('npm set-script build "tsc"')
    shell.exec('npm set-script start "node build"')
    shell.exec(
      'npm set-script migration:run "ts-node ./node_modules/typeorm/cli.js migration:run'
    )
    shell.exec(
      'npm set-script migration:revert "ts-node ./node_modules/typeorm/cli.js migration:revert'
    )
  }

  createDirStructure(webapp = true) {
    fs.mkdirSync('./src', {
      recursive: true,
    })

    fs.mkdirSync('./src/middlewares', {
      recursive: true,
    })

    fs.mkdirSync('./src/models', {
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
