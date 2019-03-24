import express from 'express';
const router = express.Router();

export default ({ agenda }) => {
  router.post('/', (req, res) => {
    const { homework, time, imageURL } = req.body;
    console.log({ homework, time });

    // agenda.schedule :: run only once applied time
    agenda.schedule(time, 'register homework', { homework, imageURL });
    res.status(200).send({
      result: true,
      msg: '과제 등록 성공'
    });
  });

  return router;
};
