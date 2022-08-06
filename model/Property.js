const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Property name is a required field.'],
	},
	images: [{
		type: String,
		required: [true, 'Property needs 1-5 images.']
	}],
	description: {
		type: String,
		required: [true, 'Property description is a required field.'],
		maxLength: [300, 'Property description must be under 300 charecter.'],
	},
	price: {
		type: Number,
		required: [true, 'Property price is a required field.'],
	},
	amenities: [String],
	video: String,
	floorPlans: String,
	map: {
		lat: String,
		long: String,
	},
	agent: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Agent',
		required: [true, 'Property agent is a required field.'],
	},
	summary: {
		id: String,
		location: String,
		type: String,
		status: String,
		area: Number,
		beds: Number,
		bath: Number,
		garage: Number,
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

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;	