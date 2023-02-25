const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema({
    Name: String,
	Github: String,
	Fact: String,
    Animal: String,
	Img: String
});

const Tracker = mongoose.model('Tracker', trackerSchema);

module.exports = Tracker;