const Property = require('../model/Property');
const asyncHdl = require('../util/asyncHdl');
const {
  findOne,
  findAll,
  createOne,
  updateOne,
  deleteOne,
} = require('../util/crudOparetion');
const Result = require('../util/result');

/**
 * @GET
 * ~/api/v1/property
 * ~Public
 */
exports.findAll = findAll(Property, null, '-created');

/**
 * @GET
 * ~/api/v1/endpoint
 * ~type
 */
exports.propertyByAgentId = asyncHdl(async (req, res, next) => {
  const { agentId } = req.params;

  const data = await Property.find({ agent: agentId });

  const dataCount = await Property.count();

  return res.status(200).json(new Result(true, '', { data, dataCount }));
});

/**
 * @GET
 * ~/api/v1/property/:id
 * ~Public
 */
exports.findOne = findOne(Property, 'agent');

/**
 * @POST
 * ~/api/v1/property
 * ~Limited
 */
exports.createOne = createOne(Property, {
  destination: './uploads/properties',
});

/**
 * @PUT
 * ~/api/v1/property/:id
 * ~Limited
 */
exports.updateOne = updateOne(Property);

/**
 * @DELETE
 * ~/api/v1/property/:id
 * ~Limited
 */
exports.deleteOne = deleteOne(Property);
