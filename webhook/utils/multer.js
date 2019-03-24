import path from 'path';
import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY,
  region: 'ap-northeast-2'
});

const upload = multer({
  storage: multerS3({
      s3: new AWS.S3(),
      bucket: 'mentoreng-homework-image',
      key(req, file, cb) {
          cb(null, `${+new Date()}${path.basename(file.originalname)}`)
      },
      metadata(req, file, cb) {
          cb(null, {fieldName: file.fieldname});
      },
  }),
  limits: {fileSize: 5 * 1024 * 1024}
});

export default upload;