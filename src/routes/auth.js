const router = require('express').Router()
const authController = require('../controllers/auth')

router
    // .post('/check', authController.emailCheck)
    .post('/login', authController.login)
    .post('/daftar', authController.daftar)

module.exports = router