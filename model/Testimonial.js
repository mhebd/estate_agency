const mongoose = require('mongoose');

const testimonialSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is a required field.'],
		trim: true,
	},
	avatar: {
		type: String,
		required: [true, 'Avatar is a required field.'],
	},
	opinion: {
		type: String,
		required: [true, 'Opinion is a required field.'],
		maxLength: [200, 'Opinion must be under 200 charecter.']
	},
	created: {
		type: Date,
		default: Date.now
	}
}, 
{
	versionKey: false,
	toJSON: { vertuals: true },
	toObject: { vertuals: true }
})

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
module.exports = Testimonial;	