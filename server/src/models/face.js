import mongoose from "mongoose";

const faceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  vector: {
    type: [Number],
    required: true,
  },
});

const Face = mongoose.model("Face", faceSchema);

export { Face };
