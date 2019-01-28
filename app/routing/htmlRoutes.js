module.exports = function (app) {
	// dependencies
	var path = require('path');

	// Routes

	app.get('/', function (req, res) {
		res.json(path.join(__dirname, './public/home.html'));
	});
	// basic route to bring user to survey.html
	app.get('/survey', function (req, res) {
		res.json(path.join(__dirname, './public/survey.html'));
	});
}