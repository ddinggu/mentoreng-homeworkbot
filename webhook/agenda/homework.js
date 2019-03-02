export default ({ agenda, webhook }) => {
    agenda.define('register homework', job => {
        const { homework } = job.attrs.data;

        webhook.send({
            "attachments": [{
                color: "#36a64f",
                title: '오늘의 과제',
                text: homework
            }]
        });
    });
}