const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	Cart : Number,
	Title: String,
	Vendor : String,
	Description : String
		
		
	
});

module.exports = mongoose.model("Search",postSchema);