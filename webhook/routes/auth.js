import express from 'express';
import User from '#/schema/user';
const router = express.Router();

router.post('/', async (req, res, next) => {
  const { id, password } = req.body;

  try {
    const getUser = await User.find({ id });

    if (getUser[0]) {
      if (getUser[0].password === password) {
        res.status(200).send({ result: true, msg: '로그인 성공' });
      } else {
        res.status(200).send({ result: false, msg: '비밀번호를 확인해주세요' });
      }
    } else {
      res.status(200).send({ result: false, msg: '아이디를 확인해주세요' });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
