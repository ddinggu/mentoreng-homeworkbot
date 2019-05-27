import express from 'express';
import Homework from '#/schema/homework';
const router = express.Router();

export default ({ agenda }) => {
  router.post('/', (req, res) => {
    const { homework, time, imageURL } = req.body;
    console.log('time', time);

    // agenda.schedule :: run only once applied time
    agenda.schedule(time, 'register homework', { homework, imageURL });
    res.status(200).send({
      result: true,
      msg: '과제 등록 성공'
    });
  });

  router.get('/history', async (req, res) => {
    try {
      const homeworks = await Homework.find({});
      res.status(200).json({
        result: true,
        homeworks
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        result: false,
        msg: '내부 에러'
      });
    }
  });

  router.delete('/remove/:id', async (req, res) => {
    const { id } = req.params;

    try {
      const removeResult = await Homework.findOneAndRemove({
        _id: id
      });

      console.log(removeResult);

      res.status(200).json({
        result: true,
        data: true
      });
    } catch (err) {
      console.log(err);
    }
  });

  return router;
};
