const {uploadTocloudinary}=require('../helper/cloudinary_helper')
const Post = require('../model/post')
const uploadImageController=async(req,res)=>{
    try{
       if(!req.file){
        return res.status(400).json({
            success:false,
            message:"Please upload an Image"
        })
       }
       
       const {url,publicId} = await uploadTocloudinary(req.file.path)

       const image=await Post.create({
        url,
        publicId,
        caption:req.body.caption,
        uploadedBy:req.userinfo.userId
       })
       res.status(200).json({
        success:true,
        message:"Image uploaded successfully",
        image
       })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something2 went wrong"
        })
    }
    }

const fetchImageController=async (req,res)=>{


    try{
        const image=await Post.find()

    if(!image){
        return res.status(400).json({
            success:false,
            message:"No image is Available!"
        })
    }

    return res.status(200).json({
        success:true,
        message:"Image successfully fetched!",
        data:image
    })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Something went worng while fetching image! Please try again"
        })
    }
    
}




module.exports={uploadImageController,fetchImageController}