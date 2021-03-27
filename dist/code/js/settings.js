const content = 
`require('dotenv').config()
module.exports = {
  PORT: process.env.PORT || 3000,
  SECRET: process.env.JWT_SECRET || 'somesecrettoken',
  DB: {
    URI: process.env.MONGODB_URI || 'mongodb://localhost/db_name',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
}; 
`

module.exports = content