const projectModel = require('../models/project.schema')



// Get All Projects
exports.getAllProjects = async (req,res) => {
    try{
        const projects = await bookSchema.find()
        res.json({message: "Done" , status : 200 , data : projects})
    }catch(err){
        res.status(404).json({message: "Something went wrong", error : err})
    }
}

// Get One Project
exports.getOneProject = async(req, res) => {
    try{
        const project = await projectModel.findOne({_id : req.params.id})
    }catch(err){
        res.status(404).json({message: "Something went wrong", error : err})
    }
}

// Create a Project
exports.createProject = async (req, res) => {
    try{
        if (req.user.role.toLowerCase() === 'admin'){
            const newProject = new projectModel(req.body)
            res.json({message: "Project Created Successfully" , status : 200 , data : newProject})
        }else {
            res.json({message: "You don't have permission", status : 403 , error : err})
        }
    }catch(err){
        res.json({message: "Something went wrong",status: 404 , error : err})
    }
}

// Update a Project
exports.updateProject = async (req,res) => {
    try{
        const project = await projectModel.findByIdAndUpdate(req.params.id , req.body)
        res.json({message: "Done" , status : 200 , data : []})
    }catch(err){
        res.json({message: "Something went wrong",status : 404, error : err})
    }
}

// Delete a Project
exports.deleteProject = async (req,res) => {
    try{
        if (req.user.role.toLowerCase() === 'admin'){
            await projectModel.findByIdAndDelete(req.params.id)
            res.json({message : "Project Deleted Successfully" , status : 200 , data : []})
        }else {
            res.json({message: "You don't have permission", status : 403 , error : err})
        }
    }catch(err){
        res.status(404).json({message: "Something went wrong", error : err})
    }
}