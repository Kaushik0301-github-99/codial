const Post = require('../models/post');
 // async
module.exports.home = function(req,res){
   // return res.render('home',{
   //  title:"Home"
   // });

   // populate the user for each post

//    try{
      // populate the user of each post and likes also
//      let posts = await Post.find({})
//      .sort('-createdAt')
//      .populate('user')
//      .populate({
//          path: 'comments',
//          populate: {
//              path: 'user'
//          }
//      });
  
  
//      return res.render('home', {
//          title: "ManChat | Home",
//          posts:  posts
//      });
  
//   }catch(err){
//      console.log('Error', err);
//      return;
//   }


 Post.find({}).populate('user').exec((err,posts)=>{
   return res.render('home',{
      title:"codial | Home",
      posts:posts
   });
 })
}