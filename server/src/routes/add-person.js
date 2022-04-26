import express from "express";
import { Face } from "../models/face.js";
import generateFaceFeatures from "../utils/generate-face-features.js";

const router = express.Router();

router.post("/api/add-person", async (req, res) => {
  const { name } = req.body;
  const vector = generateFaceFeatures();

  const face = new Face({
    name,
    vector,
  });
  await face.save();

  res.status(201).send(face);
});

export { router as addPersonRouter };
