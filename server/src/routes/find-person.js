import express from "express";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request.js";
import { Face } from "../models/face.js";
import dotProduct from "../utils/dot-product.js";
import generateFaceFeatures from "../utils/generate-face-features.js";

const router = express.Router();

router.get("/api/find-person", async (req, res) => {
  // const face = await Face.find({});
  const personFeatures = generateFaceFeatures();
  const test = await Face.find({ name: "person1" });
  const testFeatures = test[0]["features"];

  const dot = dotProduct(personFeatures, testFeatures);

  res.status(200).send({ dot });
});

export { router as findPersonRouter };
