import express from "express";
import { Face } from "../models/face.js";
import generateFaceFeatures from "../utils/generate-face-features.js";

const router = express.Router();

router.post("/api/add-person", async (req, res) => {
  const faceFeatures = generateFaceFeatures();
  res.status(201).send({ faceFeatures });
});

export { router as addPersonRouter };
