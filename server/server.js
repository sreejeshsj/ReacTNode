require('dotenv').config()
const express=require('express')
const connectToDB=require('./database/db')
const authRouter=require('./routes/auth-router')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())

connectToDB()
const port=process.env.PORT || 3000

app.use('/api/auth',authRouter)

app.listen(port,()=>console.log("Server started at port 3000"))