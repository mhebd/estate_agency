const express = require('express');
require('dotenv').config({ path: 'config/.env' });
const morgan = require('morgan');
const cors = require('cors');
const database = require('./db/database');
const error = require('./middleware/error');
const path = require('path');

// Routers Path
const userRouter = require('./route/user');
const agentRouter = require('./route/agent');
const newsRouter = require('./route/news');
const propertyRouter = require('./route/property');
const serviceRouter = require('./route/service');
const testimonialRouter = require('./route/testimonial');

// Create Server
const app = express();

// Use MiddleWare
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));

app.use((req, res, next) => {
	res.header('Content-Range', 'items 0-20/20');
	next();
});

// Add Database
database();

// Route End Point
app.use('/api/v1/user', userRouter);
app.use('/api/v1/agent', agentRouter);
app.use('/api/v1/news', newsRouter);
app.use('/api/v1/property', propertyRouter);
app.use('/api/v1/service', serviceRouter);
app.use('/api/v1/testimonial', testimonialRouter);

// Show Error Message
app.use(error);

//->Show UI...
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/dist'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
	});
} else if (process.env.NODE_ENV === 'development') {
	app.get('/', (req, res) => {
		res.send('Hello, Developer...');
	});
}

// Listening Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Server is running on http://localhost:${PORT}`);
	}
});
