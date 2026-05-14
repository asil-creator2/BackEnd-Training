const express = require('express');
const mongoose = require('mongoose');
// 1. Initialize dotenv immediately after your core imports
require('dotenv').config(); 

const userSchema = require('./models/user.schema');
const userRouter = require('./routers/users.router.cjs');
const projectRouter = require('./routers/projects.router.cjs')
const teamRouter = require('./routers/team.router.cjs')
const app = express();
app.use(express.json());

// 2. Access your variable 
const uri = process.env.DATABASE_URL;

// Connect to DB
const connectToDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(uri)
        console.log("✅ Connected To DB")
    } catch (err) {
        console.log("❌ DB Error:", err)
    }
}

connectToDB()

app.use('/' , userRouter)
<<<<<<< HEAD
app.use('/' , projectRouter)
app.use('/', teamRouter)
=======
>>>>>>> 31cb1a0b38f81ffa218affd120ad17fac9174e75

app.use(function(res,req) {
    res.status(404).send({url : req.originalUrl + ' Not Found'})
})

// Start server
app.listen(4000, () => {
    console.log("🚀 Server running on http://localhost:4000")
})