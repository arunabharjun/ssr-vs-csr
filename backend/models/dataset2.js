const mongoose = require('mongoose');

const Dataset2Schema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model('Dataset2', Dataset2Schema);
