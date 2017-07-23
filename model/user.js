const db = require('../db/db');
const moment = require('moment');

exports.signUpNewUser = (name, email, password, callback) => {
	return db.query('select * from registration where isdelete = ? AND isactive = ? AND email = ?', ['0', '0', email], (error, rows) => {
		if (error) {
			const response = {
				status: 0,
				message: 'Something went wrong',
			};
			callback(response, null);
		} else if (rows.length === 0) {
			const reg_date = moment().format('YYYY-MM-DD HH:mm:ss');
			return db.query('insert into registration (name, email, password, reg_date) VALUES (?, ?, ?, ?)', [name, email, password, reg_date], (error, rows) => {
				if (error) {
					const response = {
						status: 0,
						message: 'Something went wrong',
					};
					callback(response, null);
				} else if (rows) {
					const response = {
						status: 1,
						message: 'Signup Successfully',
					};
					callback(null, response);		
				}
			})
		} else {
			const response = {
				status: 0,
				message: 'Sorry ! Email is already registered',
			};
			callback(response, null);
		}
	});
}

exports.logInUser = (email, password, callback) => {
	return db.query('select * from registration where isdelete = ? AND isactive = ? AND email = ? AND password = ?', ['0', '0', email, password], (error, rows) => {
		if (error) {
			const response = {
				status: 0,
				message: 'Something went wrong',
			};
			callback(response, null);
		} else if (rows.length === 1) {
			return db.query('select * from registration where active = ? AND email = ? AND password = ?', ['0', email, password], (error, rows) => {
				if (error) {
					const response = {
						status: 0,
						message: 'Something went wrong',
					};
					callback(response, null);
				} else if (rows.length === 1) {
					const response = {
						status: 1,
						message: 'Successfully Login',
					};
					callback(response, null);
				} else {
					const response = {
						status: 0,
						message: 'Please Verify Your Email',
					};
					callback(response, null);
				}
			})	
		} else {
			const response = {
				status: 0,
				message: 'Your Email/Password Wrong',
			};
			callback(response, null);
		}
	})
}