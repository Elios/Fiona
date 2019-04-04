import express from 'express'

const router = express.Router()

router.post('/', function (req, res, next) {
  req.session.user = undefined
  res.redirect('/')
})

export default router
