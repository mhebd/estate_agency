const mongoose = require('mongoose');

const agentModel = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Agent name is a required field.'],
			trim: true,
		},
		biodata: {
			type: String,
			required: [true, 'Agent biodata is a required field.'],
			maxLength: [300, 'Agent biodata must be under 200 charecter long.'],
		},
		avatar: {
			type: String,
			required: [true, 'Agent avatar is a required field.'],
		},
		email: {
			type: String,
			required: [true, 'Agent email is a required field.'],
			trim: true,
			lower: true,
			validate: {
				validator: function (email) {
					return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
				},
				message: 'Please enter a valid email.',
			},
		},
		contact: {
			phone: String,
			mobile: String,
			skype: String,
		},
		social: [
			{
				name: String,
				url: String,
				icon: String,
			},
		],
		created: {
			type: Date,
			default: Date.now,
		},
	},
	{
		versionKey: false,
		toJSON: { vertuals: true },
		toObject: { vertuals: true },
	}
);

const Agent = mongoose.model('Agent', agentModel);
module.exports = Agent;
