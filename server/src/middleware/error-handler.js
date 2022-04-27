export const errorHandler = (err, req, res, next) => {
  return res.status(err.statusCode).send({ errors: err.serializeErrors() });
};
