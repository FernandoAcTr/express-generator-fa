#!/usr/bin/env node

const { argv } = require('./config/yargs');
const generator = require('./generator');
require('colors');

let comando = argv._[0];

switch (comando) {
  case 'init':
    if (argv.typescript) {
      console.log('Initializing express with typescript...');
      generator.initWithTS();
      console.log(
        '================= Add dev script manually ================='.yellow
      );
      console.log(
        'Now please add the next script to package.json. So you can exec npm run dev'
      );
      console.log(`"dev": "tsc-watch --onSuccess \\"node build/src/index\\""`.bgBlue);
    } else {
      console.log('Initializing express...');
      generator.initWithJS();
    }
    break;

  default:
    console.log('No reconized command');
}
