
const express=require("express")
const db=require("./config/db")
const cors=require("cors")
const bodyparser=require("body-parser")
const router = require("./routes/userroute")
const reciperouter = require("./routes/reciperoute")




const app=express()
app.use(cors())
app.use(bodyparser.json())
app.use("/user",router)
app.use("/recipe",reciperouter)
app.get("/",(req,res)=>{
    res.send("welcome to my recipe-app")
})
app.listen(8002,()=>{
    console.log("server is running on port 8002")
})