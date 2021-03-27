const content = 
`import dotenv from 'dotenv'
dotenv.config()
export default {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET || 'somesecrettoken,
  DB: {
    URI: process.env.MONGODB_URI,
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
};    
`

module.exports = content
