const express = require('express')
const router = express.Router()
const projectsController = require('../controllers/projects.controller.cjs')
const authentication = require('../middleware/auth.middleware.cjs')



// API to get all projects => login
router.get('/api/projects', authentication ,projectsController.getAllProjects)
// API to get one project => login
router.get('/api/projects/:id', authentication ,projectsController.getOneProject)
// API to edit a project => login 
router.put('/api/project/:id',authentication ,projectsController.updateProject )
// API to add a project => login (admin only)
router.post('/api/projects', authentication ,projectsController.createProject)
// API to delete a project => (admin only)
router.delete('/api/projects/:id',authentication , projectsController.deleteProject)

module.exports = router;