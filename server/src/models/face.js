import mongoose from "mongoose";

const MAX_PERSON_NUMBER = 10000;

const faceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    features: {
      type: [Number],
      required: true,
    },
  },
  { capped: { size: 10485760, max: MAX_PERSON_NUMBER, autoIndexId: true } }
);

const Face = mongoose.model("Face", faceSchema);

export { Face };
