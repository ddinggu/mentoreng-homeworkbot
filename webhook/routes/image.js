import express from 'express';
import upload from '#/utils/multer';

const router = express.Router();
const imageUpload = upload.single('img');

router.post('/', (req, res) => {
  imageUpload(req, res, (err, some) => {
    if (err) {
      console.error(err.message);
      return res.status(422).send({ title: '이미지 업로드 실패!', msg: err.message, result: false });
    }

    console.log(req);
    return res.status(200).send({ result: true, imageURL: req.file.location });
  });
});

export default router;
