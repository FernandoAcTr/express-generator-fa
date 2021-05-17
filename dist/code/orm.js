const content = `{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "test",
  "password": "test",
  "database": "test",
  "synchronize": false,
  "logging": false,
  "entities": [
     "src/entities/**/*.entity.ts"
  ],
  "migrations": [
     "src/database/migrations/**/*.ts"
  ],
  "cli": {
   "entitiesDir": "src/entities",
   "migrationsDir": "src/database/migrations"
  }
}
`

module.exports = content
