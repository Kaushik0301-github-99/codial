// and to create a post into the database we need to add the model that we have created
const Post = require('../models/post');
const Comment = require('../models/comment')

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
module.exports.destroy = (req,res)=>{
    Post.findById(req.params.id,(err,post)=>{
        // .id means converting the object id into the string
        if(post.user==req.user.id){
          post.remove();
          Comment.deleteMany({post:req.params.id},function(err){
            return res.redirect('back');
          })
        }
        else{
            return res.redirect('back');
        }
    })
}