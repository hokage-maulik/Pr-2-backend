
const recipeModel=require("../model/recipemodel")

const addrecipe=async (req,res)=>{
  const data=await recipeModel.create(req.body)
  return res.send(data)
}

const getrecipe= async (req,res)=>{
    try{
        const recipedata=await recipeModel.find()
        return res.send(recipedata)
    }catch(error){
        console.log("error", error);
        return res.status(500).send({ message: "An error occurred while fetching recipes" });
    }
}

const deleterecipe = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await recipeModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).send({ message: "Recipe not found" });
        }
        return res.send({ message: "Recipe deleted successfully", data });
    } catch (error) {
        console.log("error", error);
        return res.status(500).send({ message: "An error occurred while deleting the hotel" });
    }
};

const updatereciepie=async (req,res)=>{
    const id=req.params.id
    try{
        const data=await recipeModel.findByIdAndUpdate(id,req.body)
        return res.send(data)

    }catch(error){
        console.log("error", error);
    }
}
const getrecipebyid = async (req, res) => {
    const { id } = req.params;  // Get the 'id' from the request parameters
    try {
        // Find a recipe by its id
        const recipedata = await recipeModel.findById(id);
        
        // If recipe doesn't exist, return a 404 error
        if (!recipedata) {
            return res.status(404).send({ message: "Recipe not found" });
        }
        
        // Send the recipe data as a response
        return res.send(recipedata);
    } catch (error) {
        console.log("error", error);
        return res.status(500).send({ message: "An error occurred while fetching the recipe" });
    }
};

module.exports={
    addrecipe,getrecipe,deleterecipe,updatereciepie,getrecipebyid
}