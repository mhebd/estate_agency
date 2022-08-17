const Agent = require('../model/Agent');
const { findOne, findAll, createOne, updateOne, deleteOne } = require('../util/crudOparetion');

/**
 * @GET
 * ~/api/v1/agent
 * ~Public
*/
exports.findAll = findAll(Agent, null, '-created');

/**
 * @GET
 * ~/api/v1/agent/:id
 * ~Public
*/
exports.findOne = findOne(Agent);


/**
 * @POST
 * ~/api/v1/agent
 * ~Limited
*/
exports.createOne = createOne(Agent, {destination: './uploads/agents'});


/**
 * @PUT
 * ~/api/v1/agent/:id
 * ~Limited
*/
exports.updateOne = updateOne(Agent, {destination: './uploads/agents'});


/**
 * @DELETE
 * ~/api/v1/agent/:id
 * ~Limited
*/
exports.deleteOne = deleteOne(Agent);