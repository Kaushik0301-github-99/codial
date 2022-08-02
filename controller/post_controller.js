// and to create a post into the database we need to add the model that we have created
const Post = require('../models/post');

module.exports.create = (req,res)=>{
    Post.create({
        content:req.body.content,
        user:req.user._id,
    },function(err,post){
        if(err){
            console.log('error while creating a post');return;
        }
        return res.redirect('back');
    })
}