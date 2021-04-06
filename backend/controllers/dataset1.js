const Dataset1 = require('../models/dataset1');

exports.readD1 = (req, res) => {
	Dataset1.find({}).exec((err, data) => {
		if (err || !data)
			return res.status(401).json({
				error: 'Dataset1 not found'
			});

		res.json(data);
	});
};
