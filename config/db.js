
// const mongoose=require("mongoose")

// mongoose.connect("mongodb://localhost:27017/project2")


// const db=mongoose.connection 

// db.on("connected",()=>{
//     console.log("connected to database")
// })


// require('dotenv').config(); // Load environment variables

// const mongoose = require("mongoose");

// const mongoURI = process.env.MONGO_URI; // Fallback to localhost for local development

// mongoose.connect(mongoURI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.log("Error connecting to MongoDB", err));

// const db = mongoose.connection;

// db.on("connected", () => {
//   console.log("connected to database");
// });

require('dotenv').config(); // Load environment variables
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI; // Get the Mongo URI from environment variable

// Ensure MongoDB URI is not undefined or empty
if (!mongoURI) {
  console.log("Mongo URI is not defined in the environment variables.");
  process.exit(1); // Exit if URI is missing
}

// Connecting to MongoDB
mongoose.connect(mongoURI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false, // Recommended in newer versions of Mongoose
  // useCreateIndex: true // Avoid warnings related to `createIndex`
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB", err));

const db = mongoose.connection;

// Event listener for successful connection
db.on("connected", () => {
  console.log("Connected to database");
});

// You can also listen for other events like errors or disconnections:
db.on("error", (err) => {
  console.log("MongoDB connection error: ", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});
