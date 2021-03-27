require('colors')
const fs = require('fs')
var shell = require('shelljs')

//import content
const indexContent = require('./code/js/index')
const settingsContent = require('./code/js/settings')
const routerContent = require('./code/js/router')
const localsContent = require('./code/js/locals-middleware')
const ormContent = require('./code/js/orm')
const envContent = require('./code/js/env')
const gitContent = require('./code/js/gitIgnore')

//apionly content
const indexApiContent = require('./code/js/api-only/index')
const validateBody = require('./code/js/api-only/validate-middleware')

class Generator {
  init() {
    this.createDirStructure()
    fs.writeFileSync('./src/index.js', indexContent)
    fs.writeFileSync('./src/config/settings.js', settingsContent)
    fs.writeFileSync('./src/routes/index.routes.js', routerContent)
    fs.writeFileSync('./src/middlewares/locals.js', localsContent)
    fs.writeFileSync('./ormconfig.json', ormContent)
    fs.writeFileSync('./.env', envContent)
    fs.writeFileSync('./.gitignore', gitContent)
    fs.writeFileSync('./README.md', '')

    fs.writeFileSync('./src/views/index.hbs', '')
    fs.writeFileSync('./src/views/layouts/main.hbs', '')
    fs.writeFileSync('./src/models/User.js', '')

    console.log('================= Installing modules ================='.yellow)
    shell.exec(
      'npm i express express-session dotenv passport passport-local morgan express-handlebars csurf typeorm connect-flash'
    )
  }

  initForApi() {
    this.createDirStructure(false)
    fs.writeFileSync('./src/index.js', indexApiContent)
    fs.writeFileSync('./src/config/settings.js', settingsContent)
    fs.writeFileSync('./src/middlewares/validateBody.js', validateBody)
    fs.writeFileSync('./src/routes/index.routes.js', routerContent)
    fs.writeFileSync('./ormconfig.json', ormContent)
    fs.writeFileSync('./.env', envContent)
    fs.writeFileSync('./.gitignore', gitContent)
    fs.writeFileSync('./README.md', '')

    fs.writeFileSync('./src/models/User.js', '')

    console.log('================= Installing modules ================='.yellow)
    shell.exec(
      'npm i express express-validator jsonwebtoken cors dotenv passport passport-jwt morgan typeorm'
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
