const db = require('../db/db');

exports.getAllCalagory = function (callback) {
	return db.query('select * from main_category WHERE isdelete = ? AND isactive = ?', ["0", "0"], (error, rows) => {
		if (error) {
			const response = {
				status: 0,
				message: 'Something went wrong',
			};
			callback(response, null);
		} else if (rows) {
			const response = {
				status: 1,
				data: [],
			};
			
			rows.map((title) => {
				return response.data.push({
					id: title.id,
					name: title.name,
					slug: title.slug
				});
			});
			callback(null, response);
		}
	})
}

exports.getAllSubCategory = function (mainCategorySlug, callback) {
	db.query('select * from main_category WHERE isdelete = ? AND isactive = ? AND slug = ?', ["0", "0", mainCategorySlug], (error, rows) => {
		if (error) {
			const response = {
				status: 0,
				message: 'Something went wrong',
			};
			callback(response, null);
		} else if (rows.length > 0) {
			db.query('select * from sub_category WHERE isdelete = ? AND isactive = ? AND main_cat_id = ?', ["0", "0", rows[0].id], (error, rows) => {
				if (error) {
					const response = {
						status: 0,
						message: 'Something went wrong',
					};
					callback(response, null);
				} else if (rows.length > 0){
					const response = {
						status: 1,
						data: [],
					};

					rows.map((title) => {
						return response.data.push({
							id: title.id,
							name: title.name,
							slug: title.slug,
						});
					});

					callback(null, response);
				} else {
					const response = {
						status: 0,
						message: 'No Data Found',
					};
					callback(response, null);
				}
			});
		} else {
			const response = {
				status: 0,
				message: 'No Data Found',
			};
			callback(response, null);	
		}
	});
}