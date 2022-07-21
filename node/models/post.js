const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	Cart :{
		type : Number,
		requires:"Number only",
		minlength : 0,
		maxlength :200
	}
});

module.exports = mongoose.model("Post",postSchema);