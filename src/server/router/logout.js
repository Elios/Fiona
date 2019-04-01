import express from 'express'

const router = express.Router()

router.post('/', function (req, res, next) {
  if (req.session.user) {
    req.session.user = undefined
    res.redirect('/')
  } else {
    res.redirect('/')
    next(new Error('用户未登录，登出失败'))
  }
})

export default router
