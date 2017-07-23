const User = require('../model/user');

exports.signUp = function(req, res, next) {
	const name = req.body.name ? req.body.name : '';
	const email = req.body.email ? req.body.email : '';
	const password = req.body.password ? req.body.password : '';

	if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '')	{
		User.signUpNewUser(name, email, password, (error, response) => {
			if (error) {
				res.json(error);
			} else {
				res.json(response);
			}
		});
	} else {
		const response = {
			status: 0,
			message: 'All Fields are require'
		}; 
		res.json(response);
	}
}

exports.logIn = function(req, res, next) {
	const email = req.body.email ? req.body.email : '';
	const password = req.body.password ? req.body.password : '';

	if (email.trim() !== '' && password.trim() !== '')	{
		User.logInUser(email, password, (error, response) => {
			if (error) {
				res.json(error);
			} else {
				res.status(200).json(response);
			}
		});
	} else {
		const response = {
			status: 0,
			message: 'All Fields are require'
		}; 
		res.json(response);
	}
}