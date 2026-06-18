export const variables = {
  PORT: process.env.PORT || 4000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  MONGO_URI: process.env.MONGO_URI,
}
export default variables;