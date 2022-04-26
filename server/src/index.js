import mongoose from "mongoose";
import { app } from "./app.js";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://face-mongo-srv:27017/face");
    console.log("Connected to mongoDb");
  } catch (err) {
    console.log(err);
  }
};
connectDB();

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
