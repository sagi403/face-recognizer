import express from "express";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request.js";
import { Face } from "../models/face.js";

const router = express.Router();

router.get("/api/find-person", async (req, res) => {
  const face = await Face.find({});
  res.status(200).send(face);
});

export { router as findPersonRouter };
