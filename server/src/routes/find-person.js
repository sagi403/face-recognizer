import express from "express";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request.js";
import { Face } from "../models/face.js";

const router = express.Router();

router.get("/api/find-person", async (req, res) => {
  res.status(200).send({});
});

export { router as findPersonRouter };
