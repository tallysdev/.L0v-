import aws, { S3 } from 'aws-sdk';
import mime from 'mime';
import fs from 'fs/promises';
import path from 'path';
import uploadConfig from '../config/upload';

class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: process.env.REGION,
    });
  }

  async saveFile(filename: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.directory, filename);

    const ContentType = mime.getType(originalPath);

    if (!ContentType) {
      throw new Error('File not found');
    }

    const fileContent = await fs.readFile(originalPath);

    await this.client
      .putObject({
        Bucket: process.env.BUCKET_NAME as string,
        Key: filename,
        ACL: 'public-read',
        Body: fileContent,
        ContentType,
      })
      .promise();

    await fs.unlink(originalPath);

    const imageUrl = `https://${process.env.BUCKET_NAME}.s3.${process.env.REGION}.amazonaws.com/${filename}`;
    return imageUrl;
  }

  async deleteFile(filename: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: process.env.BUCKET_NAME as string,
        Key: filename,
      })
      .promise();
  }
}

export default S3Storage;
