const Joi = require("joi");

const pagedValidation = Joi.object().keys({
  page: Joi.number().min(0).optional(),
  pageSize: Joi.number().min(1).optional(),
});

module.exports = async function withResponseMiddleware(
  serializer,
  { req, res },
  service,
  { paged = false, defaultPageSize = 10 } = {}
) {
  if (paged) {
    const validationResult = pagedValidation.validate(req.query);

    req.state.pageConfig = {
      page: validationResult.value.page || 0,
      pageSize: validationResult.value.pageSize || defaultPageSize,
    };
  }

  // Calling the service
  const flowResult = await service(req, res);

  // If results are paged, return those paged
  const resource = paged ? flowResult.results : flowResult;

  const serializedResults = serializer.serialize(resource);

  if (paged) {
    serializedResults.pageData = {
      total: flowResult.total,
      ...req.state.pageConfig,
    };
  }

  res.send(serializedResults);
};
