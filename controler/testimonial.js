const Testimonial = require('../model/Testimonial');
const { findAll, createOne, updateOne, deleteOne } = require('../util/crudOparetion');

/**
 * @GET
 * ~/api/v1/testimonial
 * ~Public
*/
exports.findAll = findAll(Testimonial, null, '-created');

/**
 * @POST
 * ~/api/v1/testimonial
 * ~Limited
*/
exports.createOne = createOne(Testimonial);


/**
 * @PUT
 * ~/api/v1/testimonial/:id
 * ~Limited
*/
exports.updateOne = updateOne(Testimonial);


/**
 * @DELETE
 * ~/api/v1/testimonial/:id
 * ~Limited
*/
exports.deleteOne = deleteOne(Testimonial);