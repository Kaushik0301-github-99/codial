const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content:{
        type:String,
        require:true
    },
    user:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'User'
    },

    // including the all comments on that post 
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
},
{
    timestamps:true
})


const post = mongoose.model('Post',postSchema);

module.exports = post;