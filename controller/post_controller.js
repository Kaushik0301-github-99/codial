// and to create a post into the database we need to add the model that we have created
const Post = require('../models/post');

module.exports.post = (req,res)=>{
    Post.create({
        content:req.body.content,
        user:req.user._id,
    })
}