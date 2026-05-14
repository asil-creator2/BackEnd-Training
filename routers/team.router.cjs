const express = require('express')
const router = express.Router()
const authentication = require('../middleware/auth.middleware.cjs')

// API get all Members
router.get('/api/team-members', authentication, )
// API get one Member
router.get('/api/team-members/:id' , authentication , )
// API add Member
router.post('/api/team-members' , authentication, )
// API edit Member
router.put('/api/team-members/:id' , authentication, )
// API delete Member
router.delete('/api/team-members/:id', authentication)

module.exports = router