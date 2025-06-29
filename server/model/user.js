const mongoose=require('mongoose')


const userShema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true, 
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }


},{timestamps:true})


module.exports=mongoose.model('react_user',userShema)