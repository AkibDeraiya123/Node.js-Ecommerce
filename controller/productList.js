const Product = require('../model/productListModel');

exports.getProductList = function(req, res, next) {
	const maincat = req.body.main_cat_id ? req.body.main_cat_id : '';
	const subcat = req.body.sub_cat_id ? req.body.sub_cat_id : '';
	
	if (maincat > 0 && subcat > 0) {
		Product.getProductList(maincat, subcat, (error, success) => {
			if (error) {
				res.json(error);
			} else if(success) {
				res.json(success);
			}
		});
	} else {
		const response = {
			status: 0,
			message: 'Bad Api Request',
		};
		res.json(response);
	}
}