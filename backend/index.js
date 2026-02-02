import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import cors from "cors";

import userRoute from "./route/user.route.js"

dotenv.config();

const app = express();
 
app.use(cors());


app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});


const PORT=process.env.PORT  || 4000;

// connet to mongoDB

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to mongoDB"))
  .catch(err => console.log("mongo error", err));



// defining routes
app.use("/book",bookRoute);
app.use("/users",userRoute); 

app.listen(PORT, () => {
  console.log(`server is  listening on port ${PORT}`)
});
