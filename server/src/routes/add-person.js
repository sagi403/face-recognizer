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
    const features = generateFaceFeatures();

    try {
      const face = new Face({
        name,
        features,
      });
      await face.save();

      res.status(201).send(face);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to add new person to the database");
    }
  }
);

export { router as addPersonRouter };
