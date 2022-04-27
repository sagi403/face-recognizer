import express from "express";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request.js";
import { Face } from "../models/face.js";
import generateFaceFeatures from "../utils/generate-face-features.js";

const router = express.Router();

router.post(
  "/api/add-person",
  [body("name").not().isEmpty().withMessage("name is required")],
  validateRequest,
  async (req, res) => {
    const { name } = req.body;
    const vector = generateFaceFeatures();

    const face = new Face({
      name,
      vector,
    });
    await face.save();

    res.status(201).send(face);
  }
);

export { router as addPersonRouter };
