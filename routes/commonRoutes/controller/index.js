exports.index = function(req, res, next) {
	const response = {
		msg: "hello",
	};
	res.json(response);
};

exports.user = function(req, res, next) {
	const response = {
		msg: "hello",
	};
	res.json(response);
};

