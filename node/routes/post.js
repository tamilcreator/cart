const express  = require("express");
const postController = require("../controller/post")
const route = express.Router();
const validator = require('../validator/index');
route.get("/",postController.getPosts);
route.get("/get/:id",postController.gEt);
route.get("/find/:data",postController.seaRch);
route.post("/cart/:id",postController.caRtAdd);
route.get("/cart",postController.caRt);
// route.post("/del",postController.delete);
// route.post("/post",validator.createPostValidator,postController.createPost);/
// router.get("/1",postController.getAno);

module.exports = route;