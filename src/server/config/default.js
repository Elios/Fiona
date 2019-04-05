export default {
  port: 4000,
  session: {
    saveUninitialized: false,
    resave: false,
    secret: 'fiona',
    key: 'fiona',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/fiona'
}
