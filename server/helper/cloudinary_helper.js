const cloudinary=require('../config/cloudinary')


const uploadTocloudinary=async (filePath)=>{

    try{
        const result=await cloudinary.uploader.upload(filePath)
        console.log(result)
    return {
        url:result.secure_url,
        publicId:result.public_id
    }
    }catch(err){
       throw new Error("Something6 went wornd")
    }
    
}

module.exports={
    uploadTocloudinary
}