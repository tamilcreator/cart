export.createPostValidator = (req,res,next) =>{
	// title
	req.check("title","write a title").notEmpty();
	req.check("title","title length should be greater").isLength({
		min:6 , max:20
	});
	// Body
    req.check("body","Body is Empty").notEmpty();
	req.check("body","Body length should be greater").isLength({
		min:6 , max:20
	});
	// errors
	const errors = req.validationErrors();
	if (errors){
		const firstError = errors.maps((error)=>error.msg[0]
			return res.status(400).json({error: firstError}))
	} 

next();


}

