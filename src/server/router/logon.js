import express from 'express'
import sha1 from 'sha1'
import UserModel from '../model/user'

const router = express.Router()

router.post('/', function (req, res, next) {
  let user = {}
  Object.assign(user, req.body)
  user.pwd = sha1(user.pwd)
  UserModel.create(user).then(function (result) {
    user = result.ops[0]
    Reflect.deleteProperty(user, 'pwd')
    req.session.user = user
    res.redirect('/')
  }).catch(function (e) {
    next(e)
  })
})

export default router
