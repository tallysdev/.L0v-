import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
const cloudinary = require('cloudinary').v2;
import { IncomingForm } from 'formidable';
import S3Storage from '../utils/S3Storage';

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

// export async function uploadImage(imageUploaded) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       // Upload the image to Cloudinary
//       const result = await cloudinary.uploader.upload(imageUploaded.path);

//       // Resolve with the Cloudinary public_id (image identifier)
//       resolve(result);
//       return result;
//     } catch (error) {
//       console.error('Error uploading image to Cloudinary:', error);
//       reject(error);
//     }
//   });
// }

// export async function getImage(formData) {
//   const data = await new Promise(function (resolve, reject) {
//     const form = new IncomingForm({ keepExtensions: true });
//     form.parse(formData, function (err, fields, files) {
//       if (err) return reject(err);
//       resolve({ fields, files });
//     });
//   });

//   return data.files.image;
// }

class UploadImagesService {
  async execute(file: Express.Multer.File): Promise<string> {
    const s3 = new S3Storage();
    const imageUrl = await s3.saveFile(file.filename);
    return imageUrl;
  }
}

export default UploadImagesService;
