require('colors');
const fs = require('fs');
var shell = require('shelljs');
const JScontent = require('./js-content');
const TSContent = require('./ts-content');

class Generator {
  initWithJS() {
    this.createDirStructure();
    fs.writeFileSync('./src/index.js', JScontent.getIndexContent());

    fs.writeFileSync('./src/config/settings.js', JScontent.getSettingsContent());

    fs.writeFileSync(
      './src/routes/index.routes.js',
      JScontent.getRouterContent()
    );

    fs.writeFileSync('./src/views/index.hbs', '');
    fs.writeFileSync('./src/views/layouts/main.hbs', '');

    this.createCommonFiles();

    console.log('================= Installing modules ================='.yellow);
    shell.exec('npm i express morgan express-handlebars cors');
  }

  initWithTS() {
    this.createDirStructure();
    fs.writeFileSync('./src/index.ts', TSContent.getIndexContent());

    fs.writeFileSync('./src/config/settings.ts', TSContent.getSettingsContent());

    fs.writeFileSync(
      './src/routes/index.routes.ts',
      TSContent.getRouterContent()
    );

    fs.writeFileSync('./src/views/index.hbs', '');
    fs.writeFileSync('./src/views/layouts/main.hbs', '');

    this.createCommonFiles();

    console.log('================= Installing modules ================='.yellow);
    shell.exec('npm i express morgan express-handlebars cors');
    console.log('================= Installing dev modules ================='.yellow);
    shell.exec('npm i -D @types/express @types/morgan @types/express-handlebars @types/cors @types/node typescript tsc-watch');
    console.log('================= Init tsc ================='.yellow);
    shell.exec('tsc --init')
  }

  createDirStructure() {
    fs.mkdirSync('./src', {
      recursive: true,
    });

    fs.mkdirSync('./src/middlewares', {
      recursive: true,
    });

    fs.mkdirSync('./src/models', {
      recursive: true,
    });

    fs.mkdirSync('./src/controllers', {
      recursive: true,
    });

    fs.mkdirSync('./src/routes', {
      recursive: true,
    });

    fs.mkdirSync('./src/views/partials', {
      recursive: true,
    });

    fs.mkdirSync('./src/views/layouts', {
      recursive: true,
    });

    fs.mkdirSync('./src/config', {
      recursive: true,
    });

    fs.mkdirSync('./public/css', {
      recursive: true,
    });

    fs.mkdirSync('./public/js', {
      recursive: true,
    });
  }

  createCommonFiles() {
    fs.writeFileSync('README.md', '');
    fs.writeFileSync('.gitignore', 'node_modules');
  }
}

module.exports = new Generator();
