function errorLogger(error, req, res, next) {
  // for logging errors
  if (process.env.NODE_ENV === "development") {
    console.error(error);
  }
  next(error); // forward to next middleware
}

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  res.header("Content-Type", "application/json");
  res.status(error.statusCode || 500).send({
    error: true,
    message: error.message || "Something went wrong",
    code: error.statusCode || 500,
    errorName: error.name || "Error",
  });
};

module.exports = { errorLogger, errorHandler };
