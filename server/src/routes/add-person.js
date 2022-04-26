import express from "express";
import { Face } from "../models/face.js";

const router = express.Router();

router.post("/api/add-person", async (req, res) => {
  res.status(201).send({});
});

export { router as addPersonRouter };
