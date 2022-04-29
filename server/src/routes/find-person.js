import express from "express";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request.js";
import { Face } from "../models/face.js";
import dotProduct from "../utils/dot-product.js";
import generateFaceFeatures from "../utils/generate-face-features.js";

const router = express.Router();

const NUMBER_OF_CLOSEST = 3;

router.get("/api/find-person", async (req, res) => {
  const face = await Face.find({});
  const personFeatures = generateFaceFeatures();

  if (face.length <= NUMBER_OF_CLOSEST) {
    return res.status(200).send(face);
  }

  const closestList = [];

  for (const person of face) {
    const obj = {};
    const dot = dotProduct(personFeatures, person["features"]);
    obj["person"] = person;
    obj["dot"] = dot;
    closestList.push(obj);
  }

  closestList.sort((a, b) => b.dot - a.dot);

  res.status(200).send(closestList.slice(0, NUMBER_OF_CLOSEST));
});

export { router as findPersonRouter };
