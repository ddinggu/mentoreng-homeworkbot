const { IncomingWebhook } = require('@slack/client');

module.exports = () => {
    const url = process.env.SLACK_WEBHOOK_URL || '';

    if (!url) {
        console.log('Must specify a token to use in Webhook');
        process.exitCode = 1;
        return;
    };

    const webhook = new IncomingWebhook(url);

    return webhook;
}




// require('dotenv').config();
// const rtm = new RTMClient(process.env.SLACK_TOKEN);
// const web = new WebClient(process.env.SLACK_TOKEN);

// rtm.start();

// // check token authenticated
// rtm.on('authenticated', data => {
//     console.log('On Start Homework bot!');
// });

// require('./events')({ rtm, web });