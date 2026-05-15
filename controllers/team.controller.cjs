const memberSchema = require('../models/member.schema')

exports.getAllMembers = async (req, res) => {
    try{
        const members = await memberSchema.find()
        res.json({message: "Done" , status : 200 , data : members})
    }catch(err){
        console.log(err)
        res.status(404).json({message: "Something went wrong", error : err})
    }
}
//Get Ine Member
exports.getOneMember = async (req, res) => {
    try{
        const member = await memberSchema.findOne(req.params.id)
        res.json({message : "Done" , status : 200 , data : member})
    } catch (err) {
        console.log("err : " , err)
        res.status(404).json({message: "Something went wrong", error : err})
    }
}

// Create New Member
exports.createMember = async (req,res) => {
    try{
        const newMember = new memberSchema(req.body)
        await newMember.save()
        res.json({message:"Member added Successfully" , status: 200 , member : newMember})
    } catch (err) {
        console.log("err : " , err)
        res.status(404).json({message: "Something went wrong", error : err})
    }
}

// Update and existing Member
exports.updateMember = async(req, res) => {
    try{
        await memberSchema.findByIdAndUpdate(req.params.id , req.body)
        res.json({message : 'Member Updated Successfully' , status : 200, data : []})
    } catch (err) {
        console.log("err : " , err)
        res.status(404).json({message: "Something went wrong", error : err})
    }
}

// Delete a Member
exports.deleteMember = async (req,res) => {
    try{
        if (req.user.role.toLowerCase() === 'admin'){
            await memberSchema.findByIdAndDelete(req.params.id)
            res.json({message : "Member Deleted Successfully" , status : 200 , data : []})
        }
    } catch (err) {
        console.log("err : " , err)
        res.status(404).json({message: "Something went wrong", error : err})
    }
}