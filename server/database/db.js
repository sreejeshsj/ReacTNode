const mongoose=require('mongoose')

const uri=process.env.MONGO_URI

const connectToDB=async ()=>{

    try{
        await mongoose.connect(uri)
        console.log("Database connected successfully")
    }catch(err){
        console.log("Database is not connected",err)
    }
    

}

module.exports=connectToDB