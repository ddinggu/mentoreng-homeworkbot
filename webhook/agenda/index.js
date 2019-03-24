const Agenda = require('agenda');

export default () => {
  const agenda = new Agenda({
    db: {
      address: process.env.MONGODB_URI,
      collection: 'Homework',
    }
  });

  agenda.on('ready', () => {
    console.log('agenda ready!!');
  });

  agenda.on('complete', job => {
    console.log(`Job(슬랙봇) ${job.attrs.name} complete!`);
  });

  agenda.on('success:register homework', job => {
    console.log(`슬랙봇 과제 올리기 성공: ${job.attrs.data}`);
  });

  agenda.on('fail:register homework', err => {
    console.log(`슬랙봇 과제 올리기 실패: ${err.message}`);
  });

  agenda.start();

  return agenda;
};
