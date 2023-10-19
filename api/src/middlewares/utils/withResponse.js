module.exports = async function withResponseMiddleware(
  { req, res, next },
  service
) {
  // Calling the service
  try {
    const flowResult = await service(req, res);
    res.status(200).send({ msg: "Ok", data: flowResult });
  } catch (error) {
    next(error);
  }
};
