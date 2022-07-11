const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content:{
        type:String,
        require:true
    },
    user:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'users'
    },
},
{
    timestamps:true
})


const post = mongoose.model('Post',postSchema);

module.exports = post;