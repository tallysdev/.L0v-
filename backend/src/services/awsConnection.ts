import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
const cloudinary = require('cloudinary').v2;
import { IncomingForm } from 'formidable';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export function uploadImage(imageUploaded) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(imageUploaded);
  });
}

export async function getImage(formData) {
  const data = await new Promise(function (resolve, reject) {
    const form = new IncomingForm({ keepExtensions: true });
    form.parse(formData, function (err, fields, files) {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  return data.files.image;
}

// const s3 = new S3({
//   apiVersion: '2006-03-01',
//   accessKeyId: process.env.ACCESS_KEY,
//   secretAccessKey: process.env.SECRET_KEY,
//   region: process.env.REGION,
//   signatureVersion: 'v4',
// });

// export async function uploadToS3(
//   file: Express.Multer.File
// ): Promise<string | null> {
//   try {
//     const fileType = encodeURIComponent(file.mimetype.split('/')[1]);
//     const key = `${uuidv4()}.${fileType}`;

//     const bucketName = process.env.BUCKET_NAME;

//     if (!bucketName) {
//       console.error('Bucket name is not defined in the environment variables.');
//       return null;
//     }

//     const s3Params = {
//       Bucket: bucketName,
//       Key: key,
//       Expires: 60,
//       ContentType: file.mimetype,
//     };

//     const uploadUrl = await s3.getSignedUrlPromise('putObject', s3Params);

//     await s3
//       .upload({
//         Bucket: bucketName,
//         Key: key,
//         Body: file.buffer,
//         ContentType: file.mimetype,
//       })
//       .promise();

//     return key;
//   } catch (error) {
//     console.error('Error uploading to S3:', error);
//     return null;
//   }
// }
