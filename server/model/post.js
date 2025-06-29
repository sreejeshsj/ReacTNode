const mongoose=require('mongoose')

const PostSchema=new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    publicId:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        trim:true
    },
    uploadedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
        index:true
    }
},{timestamps:true})


module.exports=mongoose.model('Post',PostSchema)