require('dotenv').config();

// Load slack scripts
const { RTMClient, WebClient } = require('@slack/client');
const rtm = new RTMClient(process.env.SLACK_TOKEN);
const web = new WebClient(process.env.SLACK_TOKEN);

// Load Agenda scripts 
const Agenda = require('agenda');
const agenda = new Agenda({ db: { address: process.env.MONGODB_URI, collection: 'homework' } });

// listener start
rtm.start();
agenda.start();

// Get and Set Channel datas in MongoDB
let homeworkChannelId;
(async () => {
    const channelList = await web.channels.list();
    const homeworkChannelData = channelList.channels.find(chennel =>
        chennel.is_member && chennel.name === 'random'
    );

    homeworkChannelId = homeworkChannelData.id;
    console.log(homeworkChannelId);
})();

require('./agenda/listener')({ rtm, agenda, homeworkChannelId });
require('./slack/listener')({ rtm, agenda });
