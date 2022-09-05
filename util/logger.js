const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
	level: 'debug',
	meta: true,
	format: format.combine(format.json(), format.timestamp()),
	transports: [
		new transports.Console(),
		new transports.File({ filename: 'logs.log' }),
	],
});
