import express from "express";
import bodyParser from "body-parser";
import { addPersonRouter } from "./routes/add-person.js";
import { errorHandler } from "./middleware/error-handler.js";

const app = express();
app.use(bodyParser.json());

app.use(addPersonRouter);

app.use(errorHandler);

export { app };
