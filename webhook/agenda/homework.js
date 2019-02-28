module.exports = ({ agenda, webhook }) => {
    agenda.define('register homework', job => {
        const { homework } = job.attrs.data;

        webhook.send({
            title: '오늘의 과제',
            text: homework,
        });
    });
}