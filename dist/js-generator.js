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

class Generator {
  init() {
    this.createDirStructure()
    fs.writeFileSync('./src/index.js', indexContent)
    fs.writeFileSync('./src/config/settings.js', settingsContent)
    fs.writeFileSync('./src/routes/index.routes.js', routerContent)
    fs.writeFileSync('./src/middlewares/locals.js', localsContent)
    fs.writeFileSync('./src/ormconfig.json', ormContent)
    fs.writeFileSync('./.env', envContent)
    fs.writeFileSync('./.gitignore', gitContent)
    fs.writeFileSync('./README.md', '')

    fs.writeFileSync('./src/views/index.hbs', '')
    fs.writeFileSync('./src/views/layouts/main.hbs', '')
    fs.writeFileSync('./src/models/User.js', '')

    console.log('================= Installing modules ================='.yellow)
    shell.exec('npm i express express-session dotenv passport passport-local morgan express-handlebars csurf typeorm connect-flash')
  }

  createDirStructure() {
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

    fs.mkdirSync('./src/views/partials', {
      recursive: true,
    })

    fs.mkdirSync('./src/views/layouts', {
      recursive: true,
    })

    fs.mkdirSync('./src/config', {
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

module.exports = new Generator()
