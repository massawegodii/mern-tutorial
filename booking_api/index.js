import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRouter from './routes/auth.js';
import usersRouter from './routes/users.js';
import hotelsRouter from './routes/hotels.js';
import roomsRouter from './routes/rooms.js';
import cookieParser from "cookie-parser";

const app = express();
dotenv.config()

// Database connection
mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: 'booking',
})
.then(() => console.log('Database connection is ready ...'))
.catch((error) => console.error('Database connection error:', error));

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

//Middleware
app.use(express.json())
app.use(cookieParser())

// API base URL
const api = process.env.API_URL;
app.use(`${api}/auth`, authRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/hotels`, hotelsRouter);
app.use(`${api}/rooms`, roomsRouter);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  }); 

// Server setup
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000/");
});