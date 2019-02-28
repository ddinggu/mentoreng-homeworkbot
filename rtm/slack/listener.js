const recognizeMessage = require('../utils');

module.exports = ({ rtm, agenda }) => {
    // Check authenticate bot token
    rtm.on('authenticated', data => console.log('bot-token authenticated!'));

    // listing message event to bot
    rtm.on('message', async message => {
        const { user, text, channel } = message;
        console.log('user:::', user);
        const checkVaildData = await recognizeMessage(user, text);
        const { status, homework } = checkVaildData;

        if (!status.userVaild || !status.homeworkMsg) {
            return;
        } else {
            agenda.now('send homework', { homework: homework.contents });
            // agenda.schedule(homework.date, 'send homework', { homework: homework.contents }, job => {
            rtm.sendMessage(`과제가 등록되었습니다. ${homework.date}에 확인해주세요.`, channel || user);
            // console.log(job);
        }
    });
}
