const News = require('../model/News');
const { findOne, findAll, createOne, updateOne, deleteOne } = require('../util/crudOparetion');

/**
 * @GET
 * ~/api/v1/news
 * ~Public
*/
exports.findAll = findAll(News, null, '-created');

/**
 * @GET
 * ~/api/v1/news/:id
 * ~Public
*/
exports.findOne = findOne(News);


/**
 * @POST
 * ~/api/v1/news
 * ~Limited
*/
exports.createOne = createOne(News);


/**
 * @PUT
 * ~/api/v1/news/:id
 * ~Limited
*/
exports.updateOne = updateOne(News);


/**
 * @DELETE
 * ~/api/v1/news/:id
 * ~Limited
*/
exports.deleteOne = deleteOne(News);