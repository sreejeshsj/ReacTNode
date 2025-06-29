const express=require('express')
const authMiddler = require('../middleware/auth-middleware')
const uploadMiddleware = require('../middleware/upload-middleware')
const {uploadImageController,fetchImageController, deleteImageController} = require('../controllers/image_uploader')

const router=express.Router()


router.post('/upload',authMiddler,uploadMiddleware.single('image'),uploadImageController)
router.get('/fetch-image',authMiddler,fetchImageController)
router.delete('/delete/:id',authMiddler,deleteImageController)
module.exports=router