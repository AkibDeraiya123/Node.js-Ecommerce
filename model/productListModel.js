const db = require('../db/db');

exports.getProductList = function (mainCatId, SubCatId, callback) {
	return db.query('select * from product where isdelete = ? AND isactive = ? AND main_cat = ? AND sub_cat = ?', ['0', '0', mainCatId, SubCatId], (error, rows) => {
		if (error) {
			const response = {
				status: 0,
				message: 'Something Went Wrong',
			};
			callback(response, null);
		} else if (rows) {
			if (rows.length > 0) {
				const response = {
					status: 1,
					data: [],
				};

				rows.map((title) => {
					return response.data.push({
						id: title.id,
						name: title.name,
						brand: title.brand,
						originalPrice: title.original_price,
						discount_price: title.discount_price,
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
		}
	})
}