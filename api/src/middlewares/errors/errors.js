const errorHandler = (error, req, res, next) => {
  res.header("Content-Type", "application/json");
  res.status(error.statusCode || 500).send({
    error: true,
    message: error.message || "Something went wrong",
    code: error.statusCode || 500,
    errorName: error.name || "Error",
  });
};

module.exports = { errorHandler };
