const argv = require('yargs').command('init', 'Init a new express proyect', {
  apiOnly: {
    alias: 'a',
    description: 'Create basic structure for API',
    default: false,
  },
}).argv

module.exports = {
  argv,
}
