const dotProduct = (subject, testSubject) => {
  return subject
    .map((_, i) => subject[i] * testSubject[i])
    .reduce((prevFeature, currFeature) => prevFeature + currFeature);
};

export default dotProduct;
