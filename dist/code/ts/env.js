const content = 
`PORT=3000
SECRET=somesecrettoken
MONGODB_URI=mongodb://localhost/db_name
MONGODB_USER=
MONGODB_PASSWORD=
DB_HOST=
DB_USER=
DB_PASS=

TYPEORM_CONNECTION = mysql
TYPEORM_HOST = localhost
TYPEORM_PORT = 3306
TYPEORM_USERNAME = username
TYPEORM_PASSWORD = password
TYPEORM_DATABASE = db_name
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = false

TYPEORM_ENTITIES = build/models/**/*.js
TYPEORM_MIGRATIONS = build/migration/**/*.js
TYPEORM_SUBSCRIBERS = build/subscriber/**/*.js

TYPEORM_ENTITIES_DIR = src/models
TYPEORM_MIGRATIONS_DIR = src/migration
TYPEORM_SUBSCRIBERS_DIR = src/subscriber
`
module.exports = content