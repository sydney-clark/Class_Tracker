const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema({
    Name: String,
	Github: String,
	Fact: String,
    Animal: String,
	Img: String
});

const classTracker = mongoose.model('class_tracker', trackerSchema);

module.exports = classTracker;