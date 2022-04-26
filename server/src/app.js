import express from "express";
import bodyParser from "body-parser";
import { addPersonRouter } from "./routes/add-person.js";

const app = express();
app.use(bodyParser.json());

app.use(addPersonRouter);

export { app };
