const argv = require('yargs').command('init', 'Init a new express proyect', {
  typescript: {
    alias: 't',
    description: 'Create the project using typescript',
    default: false,
  },
}).argv;

module.exports = {
  argv,
};
