const Post = require('../models/post');
const Search = require('../models/db');
const mongoose = require("mongoose"); 
const {Schema} = mongoose;
// GetAll
exports.getPosts = (req,res)=>{	
const post = Post.find({}).then((data) =>{
	res.status(200).json({data});
})
.catch(err =>console.log(err));

};

// Not needed for ref( Post Method)
exports.createPost = (req,res) =>{
	const post =  Post(req.body);
	
post.save().then (result =>{
	res.status(200).json({
		post:result
	})
})
console.log({post});
console.log(req.body);
}

// Get ByID
exports.gEt = async(req,res) =>{
	// console.log('entered gEt');	
var id = req.params.id;
// console.log(id);
const post = await Post.findById(id).then((data) =>{
	res.status(200).json({data});
})
.catch(err =>console.log(err));

	console.log(post);
	console.log(req.body);
}

//add to cart

exports.caRtAdd = async(req,res) =>{
	// console.log('entered gEt');	
var id = req.params.id;

console.log(req.body);
console.log(id);

	const post = await Post.findByIdAndUpdate(id,req.body).then((data) =>{
	res.status(200).json({data});
})
.catch(err =>console.log(err));

	console.log(post);
// 	console.log(req.body);
}


// cart

exports.caRt = async(req,res) =>{	
const post = await Post.find({Cart:{$nin:[0,null]}}).then((data) =>{
	res.status(200).json({data});
})
}


// Search full
exports.seaRch = async(req,res) =>{
var id = req.params.data;

console.log(req.body);
console.log(id);

var postSchema = Schema({
	Title: String,
	Vendor : String,
	Description : String
});


var Model = mongoose.Schema(postSchema);

 Model.index({Title: 'text'});
const query = { $text: { $search:id } };
	console.log({query});

	const post = await Post.find(query).then((data) =>{
	res.status(200).json({data});
	console.log(data);

})
// .catch(err =>console.log(err));

// 	console.log(req.body);
}