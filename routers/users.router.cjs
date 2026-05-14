const express = require('express')
const router = express.Router()
const controller = require('../controllers/user.controller.cjs')
//login
router.post('/api/users/login', controller.login)

//register
router.post('/api/users/register', controller.register)


module.exports = router;