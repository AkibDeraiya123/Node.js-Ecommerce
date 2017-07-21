const Category = require('../model/categoryModel');

exports.getAllCalagory = function(req, res, next) {
	Category.getAllCalagory((error, success) => {
		if (error) {
			res.json(error);
		} else {
			res.json(success);
		}
	})
};

exports.getAllSubCategory = function(req, res, next) {
	const mainCatSlug = req.params.categorySlug ? req.params.categorySlug : '';
	if (mainCatSlug === '') {
		const response = {
			status: 0,
			message: 'Bad Api Request',
		};
		res.json(response);
	} else {
		Category.getAllSubCategory(mainCatSlug, (error, success) => {
			if (error) {
				res.json(error);
			} else {
				res.json(success);
			}
		});
	}	
};


