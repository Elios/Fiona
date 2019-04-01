import anime from '../router/anime'
import game from '../router/game'
import film from '../router/film'
import feedback from '../router/feedback'
import logon from '../router/logon'
import login from '../router/login'
import logout from '../router/logout'

export default function (app) {
  app.get('/', function (req, res) {
    res.sendFile('./views/index.html')
  })
  app.use('/login', login)
  app.use('/logon', logon)
  app.use('/logout', logout)
  app.use('/anime', anime)
  app.use('/game', game)
  app.use('/film', film)
  app.use('/feedback', feedback)
}
