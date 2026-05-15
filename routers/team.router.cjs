const express = require('express')
const router = express.Router()
const authentication = require('../middleware/auth.middleware.cjs')
const controller = require('../controllers/team.controller.cjs')
// API get all Members
router.get('/api/team-members', authentication, controller.getAllMembers)
// API get one Member
router.get('/api/team-members/:id' , authentication , controller.getOneMember)
// API add Member
router.post('/api/team-members' , authentication, controller.createMember)
// API edit Member
router.put('/api/team-members/:id' , authentication, controller.updateMember )
// API delete Member
router.delete('/api/team-members/:id', authentication , controller.deleteMember)

module.exports = router