import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

//Middleware that tells express to parse Json
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); // Avoid CORS request issue

//Every Route start with postRoutes will start with ../posts
//Each app.use(middleware) is called every time a request is sent to the server. 
app.use("/posts", postRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
