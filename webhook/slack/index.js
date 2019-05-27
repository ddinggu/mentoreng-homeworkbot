import { IncomingWebhook } from '@slack/client';

export default () => {
  const url = process.env.NODE_ENV === 'production'
    ? process.env.SLACK_WEBHOOK_URL
    : process.env.SLACK_TESTER_URL;

  if (!url) {
    console.log('Must specify a token to use in Webhook');
    process.exitCode = 1;
    return;
  }

  const webhook = new IncomingWebhook(url);

  return webhook;
};
