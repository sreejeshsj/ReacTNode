const {uploadTocloudinary}=require('../helper/cloudinary_helper')
const Post = require('../model/post')
const cloudinary=require('../config/cloudinary')
const uploadImageController=async(req,res)=>{
    try{
       if(!req.file){
        return res.status(400).json({
            success:false,
            message:"Please1 upload an Image"
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

const deleteImageController=async (req,res)=>{
    try{
        const imageId=req.params.id
        const userId=req.userinfo.userId

        const image=await Post.findById(imageId)
  
        if (!image){
            return res.status(404).json({
                success:false,
                message:"Image with give id is not found! Please try other id"
            })
        }
        
        if(image.uploadedBy != userId){
            return res.status(401).json({
                success:false,
                message:"Your not the owner this post"
            })
        }

        const delImage= await cloudinary.uploader.destroy(image.publicId)
        await Post.findByIdAndDelete(imageId)
        return res.status(200).json({
            success:true,
            message:"Post deleted successfully!",
            data:delImage
        })


    }catch(err){
        res.status(500).json({
            success:false,
            message: " Something went wrong while trying deleting image"
        })

    }
    
}



module.exports={uploadImageController,fetchImageController,deleteImageController}