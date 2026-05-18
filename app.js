const express = require('express');
const mongoose = require('mongoose');
// 1. Initialize dotenv immediately after the core imports
require('dotenv').config(); 

const userRouter = require('./routers/users.router.cjs');
const projectRouter = require('./routers/projects.router.cjs')
const teamRouter = require('./routers/team.router.cjs')
const app = express();
app.use(express.json());

// 2. Access database variable 
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
app.use('/' , projectRouter)
app.use('/', teamRouter)

app.use(function(req,res) {
    res.status(404).send({url : req.originalUrl + ' Not Found'})
})

// Start server
app.listen(5000, () => {
    console.log("🚀 Server running on http://localhost:5000")
})