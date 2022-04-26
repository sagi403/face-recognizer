const generateFaceFeatures = () => {
  const face = new Array(256);

  for (var i = 0; i < 256; i++) {
    face[i] = Math.round(Math.random());
  }

  return face;
};

export default generateFaceFeatures;
