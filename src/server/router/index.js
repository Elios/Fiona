import anime from './anime'
import game from './game'
import film from './film'
import feedback from './feedback'
import logon from './logon'
import login from './login'
import logout from './logout'
import home from './home'

export default function (app) {
  app.use('/api/home', home)
  app.use('/api/login', login)
  app.use('/api/logon', logon)
  app.use('/api/logout', logout)
  app.use('/api/anime', anime)
  app.use('/api/game', game)
  app.use('/api/film', film)
  app.use('/api/feedback', feedback)
}
