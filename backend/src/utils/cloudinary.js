import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    

    const uploaderCloudinary = async(localFilePath) => {
        try{
            if(!localFilePath) return NULL
            // Upload an image
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            })
            //file successfully upload
            console.log("file is uploaded on cloudinary", response.url);
            return response;
            
        } catch (error){
            fs.unlinkSync(localFilePath) // remove the locally saved temporary file as upload operation failed
            return null;
        }
    }
    
    export {uploaderCloudinary}