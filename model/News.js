const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, 'News title is a re User.js field.'],
	},
	content: {
		type: String,
		required: [true, 'News content is a required field.'],
	},
	author: {
		type: String,
		default: 'Admin',
	},
	category: {
		type: String,
		default: 'Uncategories'
	},
	coverImage: {
		type: String,
		required: [true, `A cover image is required for news.`]
	},
	created: {
		type: Date,
		default: Date.now
	}
}, {
	versionKey: false,
	toJSON: { vertuals: true },
	toObject: { vertuals: true }
})

const News = mongoose.model('News', newsSchema);
module.exports = News;	