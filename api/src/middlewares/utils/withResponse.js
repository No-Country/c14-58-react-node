module.exports = async function withResponseMiddleware(
  { req, res, next },
  service
) {
  try {
    const flowResult = await service(req, res, next);
    res.status(200).json({ msg: "Ok", data: flowResult });
  } catch (error) {
    next(error);
  }
};
