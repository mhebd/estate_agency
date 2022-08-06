const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Service title is a required field.'],
		trim: true,
	},
	details: {
		type: String,
		required: [true, 'Service details is a required field.'],
		maxLength: [200, 'Service details must be under 200 charecter.']
	},
	created: {
		type: Date,
		default: Date.now,
	}
},
{
	versionKey: false,
	toJSON: { vertuals: true },
	toObject: { vertuals: true }
})

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;	