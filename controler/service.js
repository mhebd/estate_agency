const Service = require('../model/Service');
const { findAll, createOne, updateOne, deleteOne, findOne } = require('../util/crudOparetion');

/**
 * @GET
 * ~/api/v1/service
 * ~Public
*/
exports.findAll = findAll(Service, null, '-created');


/**
 * @POST
 * ~/api/v1/service
 * ~Limited
*/
exports.createOne = createOne(Service);

/**
 * @PUT
 * ~/api/v1/service/:id
 * ~Limited
*/
exports.findOne = findOne(Service);


/**
 * @PUT
 * ~/api/v1/service/:id
 * ~Limited
*/
exports.updateOne = updateOne(Service);


/**
 * @DELETE
 * ~/api/v1/service/:id
 * ~Limited
*/
exports.deleteOne = deleteOne(Service);
