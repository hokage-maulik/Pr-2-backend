
const mongoose=require("mongoose")

const recipeSchema=new mongoose.Schema({
    image:{
        type:String,
    },
    descryption:{
        type:String,
    },
    recipetitle:{
        type:String
    }
})

const recipeModel=new mongoose.model("recipe",recipeSchema) 
module.exports=recipeModel