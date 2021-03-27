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
      'npm i -D @types/express @types/express-session @types/passport @types/passport-local @types/morgan @types/express-handlebars @types/csurf @types/connect-flash @types/node typescript tsc-watch'
    )
    console.log('================= Init tsc ================='.yellow)
    shell.exec('tsc --init')
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