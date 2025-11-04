import multer from "multer"
import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"


// Configure cloudinary connected


// Configure Multer Storage


const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "cab-booking-images",
        allowed: ['jpg', 'png', 'jpeg']
    }

})


const uploadImage = multer({ storage })








export default uploadImage