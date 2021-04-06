const Dataset2 = require('../models/dataset2');

exports.readD2 = (req, res) => {
	Dataset2.find({}).exec((err, data) => {
		if (err || !data)
			return res.status(401).json({
				error: 'Dataset2 not found'
			});

		res.json(data);
	});
};
