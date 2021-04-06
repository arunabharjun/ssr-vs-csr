const mongoose = require('mongoose');

const Dataset1Schema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model('Dataset1', Dataset1Schema);
