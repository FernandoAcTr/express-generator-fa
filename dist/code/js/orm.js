const content = 
`
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "test",
  "password": "test",
  "database": "test",
  "synchronize": true,
  "logging": false,
  "entities": [
     "src/entity/**/*.js"
  ],
  "migrations": [
     "src/migration/**/*.js"
  ],
  "subscribers": [
     "src/subscriber/**/*.js"
  ]
}
`

module.exports = content