import express from 'express'
import UserModel from '../model/user'
import sha1 from 'sha1'
const router = express.Router()

router.post('/', function (req, res, next) {
  UserModel.findUserByName(req.body.uname).then(function (user) {
    if (user.pwd !== sha1(req.body.pwd)) {
      req.flash('error', '密码错误')
      res.redirect('/')
    }
    Reflect.deleteProperty(user, 'pwd')
    req.session.user = user
    res.redirect('/')
  }).catch(function (e) {
    next(e)
  })
})

export default router
