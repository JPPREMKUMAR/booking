import multer from "multer"
import { v2 as cloudinary } from "cloudinary"
import pkg from 'multer-storage-cloudinary';
const { CloudinaryStorage } = pkg;



// Configure cloudinary connected


// Configure Multer Storage

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "cab-booking-images",
        allowed: ['jpg', 'png', 'jpeg']
    }

})


const uploadImage = multer({ storage })








//export default uploadImage