import { v2 as cloudinary } from "cloudinary"
import fs from "fs"


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    

    const uploaderCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) throw new Error("No file path provided to Cloudinary uploader");
        
        if (!fs.existsSync(localFilePath)) {
            throw new Error("Uploaded file not found: " + localFilePath);
        }
        console.log("Uploading file at path:", localFilePath);
        
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        // file has been uploaded successfull
        // console.log("file is uploaded on cloudinary ", response.url);
        if(fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return response;

    } catch (error) {
        // Try to delete the file if it exists, even on error, but ignore ENOENT
    try {
      if (localFilePath && fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
      }
    } catch (delErr) {
      if (delErr.code !== "ENOENT") {
        // Only log if it's not 'file not found'
        console.error("Error deleting local file:", delErr);
      }
    }
    throw error;
    }
}

    
export {uploaderCloudinary}