const express = require('express');
const app = express();	
const bodyParser = require("body-parser");
const morgan  =  require('morgan');
const postRoutes  =  require('./controller/post');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const expressValidator = require("express-validator");
const cors =require('cors');
dotenv.config();
//db
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser : true})
.then(()=> console.log('db connected'));

mongoose.connection.on('error',err =>{
	console.log( err.message);
})

// middleware
app.use(morgan("dev")); 
app.use(cors({origin:'*'})); 
app.use(bodyParser.json()); 
app.use(expressValidator());
app.use('/post',postRoutes.createPost);
app.use("/cart/:id",postRoutes.caRtAdd);
app.use("/find/:data",postRoutes.seaRch);
// app.use("/del",postRoutes.delete);
app.use("/get/:id",postRoutes.gEt);
app.use("/cart",postRoutes.caRt);
app.use("/",postRoutes.getPosts);

// app.Post('/',postRoutes.get);

// const middle = (req,res,next)=>{console.log("middleware");next();};
// // middleware
// app.use(middle); 
const port = process.env.PORT;
app.listen(port , ()=>{console.log(port)});