const express=require('express')
const authMiddler = require('../middleware/auth-middleware')
const uploadMiddleware = require('../middleware/upload-middleware')
const {uploadImageController,fetchImageController} = require('../controllers/image_uploader')

const router=express.Router()


router.post('/upload',authMiddler,uploadMiddleware.single('image'),uploadImageController)
router.get('/fetch-image',authMiddler,fetchImageController)
module.exports=router