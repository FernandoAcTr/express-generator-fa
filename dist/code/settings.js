const content = 
`import dotenv from 'dotenv'
dotenv.config()
export const settings = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET || 'somesecrettoken',
  DB: {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_USER: process.env.MONGODB_USER,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    NAME: process.env.DB_NAME,
  },
};    
`

module.exports = content
