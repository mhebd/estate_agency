const Property = require('../model/Property');
const { findOne, findAll, createOne, updateOne, deleteOne } = require('../util/crudOparetion');

/**
 * @GET
 * ~/api/v1/property
 * ~Public
*/
exports.findAll = findAll(Property, null, '-created');

/**
 * @GET
 * ~/api/v1/property/:id
 * ~Public
*/
exports.findOne = findOne(Property);


/**
 * @POST
 * ~/api/v1/property
 * ~Limited
*/
exports.createOne = createOne(Property);


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