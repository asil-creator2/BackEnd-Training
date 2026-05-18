const mongoose = require('mongoose') 
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')


const projectsSchema = new Schema({
    title : String ,
    description : String,
    fullDescription : String,
    liveDemo: String,
    github:String,
    isCompleted:Boolean,
    isActive: Boolean,
    Category : [String],
    tech:[String],
    image : String,
    createdAt: { type: Date, default: Date.now }

})



module.exports = mongoose.model('Projects', projectsSchema)