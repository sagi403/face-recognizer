import express from "express";
import bodyParser from "body-parser";
import { addPersonRouter } from "./routes/add-person.js";
import { errorHandler } from "./middleware/error-handler.js";
import { findPersonRouter } from "./routes/find-person.js";

const app = express();
app.use(bodyParser.json());

app.use(addPersonRouter);
app.use(findPersonRouter);

app.use(errorHandler);

export { app };
