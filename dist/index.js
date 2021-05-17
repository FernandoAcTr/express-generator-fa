#!/usr/bin/env node

const { argv } = require('./config/yargs')
const TSGenerator = require('./ts-generator')
var shell = require('shelljs')
require('colors')

let comando = argv._[0]
switch (comando) {
  case 'init':
    console.log('Initializing express with typescript...')
    shell.exec('npm init -y')

    if (argv.apiOnly) TSGenerator.initForApi()
    else TSGenerator.init()
    break

  default:
    console.log('No reconized command')
}
