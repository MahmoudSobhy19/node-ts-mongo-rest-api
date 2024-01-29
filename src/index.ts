import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import router from "./router";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

// app routes.
app.use("/", router());

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

// Connect to DB.
mongoose.Promise = Promise;
mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGO_URL as string);
mongoose.connection.on("error", (error: Error) => console.log(error));

// App Listener.
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running http://localhost:${process.env.PORT}`);
});
