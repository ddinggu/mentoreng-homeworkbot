# Slack RTM, WEB을 이용한 과제봇

**당장 사용하지 않음!!**

[RTM(Real-Time Messaging)](https://slack.dev/node-slack-sdk/rtm_api)은 Websocket을 기반으로 구축되어 서버를 따로 구축할 필요가 없으며, SDK중 유일하게 메세지를 읽고 쓸 수 있는 이벤트 기반의 API이다. 

초기에는 단순히 과제만 등록하는 것이 아닌 부가적인 서비스(ex. 과제제출여부)도 제공하고자 RTM을 이용하려고 했으나, 메세지에 포커스가 맞춰진 API이기 때문에 workspace의 채널(단순 채널이름이 아닌 채널들이 가지고 있는 고유 id가 필요), 유저 id를 찾는데 어려움이 있었다. 

이는 슬랙 SDK의 [Web API](https://slack.dev/node-slack-sdk/web_api)를 이용하여 정보들을 얻어올 수 있었지만, 가져온 정보들을 서버에 일시적으로 저장하는 방법은 위험하기 때문에 DB를 이용하여 workspace 및 메세지를 보관 및 활용하고자 했다.

하지만, 회사 서비스가 슬랙에서 벗어나 카카오톡 플랫폼으로 이관할 계획을 가지고 있었고 어플리케이션 해야할 일들이 쌓여있었기 때문에 슬랙을 활용한 부가서비스들을 키울 엄두가 나지않아 다른 방법을 찾았고,
최소한의 셋팅으로 메시지를 보낼 수 있는 [Incoming Webhooks API](https://slack.dev/node-slack-sdk/incoming_webhook)로 구현하였다.  
