const content = 
`require('dotenv').config()
module.exports = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  DB: {
    URI: process.env.MONGODB_URI,
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
}; 
`

module.exports = content