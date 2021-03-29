#!/usr/bin/env node

const { argv } = require('./config/yargs')
const JSGenerator = require('./js-generator')
const TSGenerator = require('./ts-generator')
require('colors')

let comando = argv._[0]
switch (comando) {
  case 'init':
    if (argv.typescript) {
      console.log('Initializing express with typescript...')

      if (argv.apiOnly) TSGenerator.initForApi()
      else TSGenerator.init()
    } else {
      console.log('Initializing express...')
      if (argv.apiOnly) JSGenerator.initForApi()
      else JSGenerator.init()
    }
    break

  default:
    console.log('No reconized command')
}
