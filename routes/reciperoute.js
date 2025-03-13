
const express=require("express")

const { getrecipe, addrecipe, deleterecipe, updatereciepie, getrecipebyid }=require("../controller/recipecontroller")

const reciperouter=express.Router()

reciperouter.get("/get",getrecipe)
reciperouter.post("/add",addrecipe)
reciperouter.delete("/delete/:id",deleterecipe)
reciperouter.patch("/update/:id",updatereciepie)
reciperouter.get("/get/:id",getrecipebyid)

module.exports=reciperouter