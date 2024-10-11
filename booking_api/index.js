import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";

const app = express();
dotenv.config()


// API base URL
const api = process.env.API_URL;

// Database connection
mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: 'booking',
})
.then(() => console.log('Database connection is ready ...'))
.catch((error) => console.error('Database connection error:', error));

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });
  

// Server setup
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000/");
});