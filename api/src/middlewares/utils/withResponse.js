module.exports = async function withResponseMiddleware(
  { req, res, next },
  service
) {
  try {
    const flowResult = await service(req, res, next);
    res.status(200).send({ msg: "Ok", data: flowResult });
  } catch (error) {
    next(error);
  }
};
