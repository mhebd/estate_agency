const Testimonial = require('../model/Testimonial');
const {
  findAll,
  createOne,
  updateOne,
  deleteOne,
  findOne,
} = require('../util/crudOparetion');

/**
 * @GET
 * ~/api/v1/testimonial
 * ~Public
 */
exports.findAll = findAll(Testimonial, null, '-created');

/**
 * @GET
 * ~/api/v1/testimonial
 * ~Public
 */
exports.findOne = findOne(Testimonial);

/**
 * @POST
 * ~/api/v1/testimonial
 * ~Limited
 */
exports.createOne = createOne(Testimonial, {
  destination: './uploads/testimonials',
});

/**
 * @PUT
 * ~/api/v1/testimonial/:id
 * ~Limited
 */
exports.updateOne = updateOne(Testimonial, {
  destination: './uploads/testimonials',
});

/**
 * @DELETE
 * ~/api/v1/testimonial/:id
 * ~Limited
 */
exports.deleteOne = deleteOne(Testimonial);
