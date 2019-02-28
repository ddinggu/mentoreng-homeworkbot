module.exports = ({ agenda, rtm, homeworkChannelId }) => {
    console.log('homeworkChannelId:::', homeworkChannelId);

    agenda.on('ready', () => {
        console.log('agenda ready!!');
    });

    agenda.on('complete', job => {
        console.log(`Job(슬랙봇) ${job.attrs.name} complete!`);
    });

    agenda.on('success:homework', job => {
        console.log(`슬랙봇 과제 올리기 성공: ${job.attrs.data.to}`);
    });

    agenda.on('fail:homework', (err, job) => {
        console.log(`슬랙봇 과제 올리기 실패: ${err.message}`);
    });

    agenda.define('send homework', job => {
        const { homework } = job.attrs.data;
        rtm.sendMessage(homework, 'CD498FEQK');
    });
}