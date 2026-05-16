const userSchema = require('../models/user.schema.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


exports.register = async (req, res) => {
    try{
        let newUser = new userSchema(req.body)
        const hashedPassword = await bcrypt.hash(req.body.password , 10)
        newUser.password = hashedPassword
        let user = await newUser.save()
        return res.json({message : 'User Added successfully' , status : 200 , user : {email : user.email , role : user.role}})
    } catch(error){
        console.log(`Error : ${error}`)
    }
}

exports.login = async (req,res) => {
    try{
        let user = await userSchema.findOne({email : req.body.email})
        if (!user || !(await user.comparePassword(req.body.password))) {
            return res.status(401).json({message : "Invalid email or Password"})
        }

        const token = jwt.sign({ _id : user._id , email : user.email , role : user.role}, "secret")
        return res.json({message : 'User Logged In successfully' , status : 200 ,name:user.name , token : token })

    } catch(error){
        console.log(`Error : ${error}`) 
    }
}