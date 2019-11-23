const userRoutes = require('./userRoutes');
const htmlRoutes = require('./htmlRoutes');

module.exports = (app) => {
	const apiRoutes = require("express").Router();

	apiRoutes.use('/users', userRoutes);
	
	app.use('/api', apiRoutes);
	app.use('/', htmlRoutes);
};
