# 슬랙 과제 등록 봇

과제를 등록하기 위해 정시에 급한 업무를 중단하고 과제를 작성해야하는 번거로움을 줄이기 위해 구현하였습니다.

## Features

### /client

[Electron](https://electronjs.org/)을 활용하여 Shell에서 작업할 필요 없이 GUI 프로그램을 통해 간단하게 과제를 예약등록할 수 있는 프로그램 생성.

### /webhook
슬랙 SDK([Node Slack SDK](https://github.com/slackapi/node-slack-sdk))의 Incoming Webhook Messaging을 활용하여 예약메시지 서버 구축 

예약 스케줄러 : [Agenda](https://github.com/agenda/agenda)

### /rtm (**당장 사용하지 않음**)
~~슬랙 SDK([Node Slack SDK](https://github.com/slackapi/node-slack-sdk))의 
RTM(Real-Time Messaging API)을 이용하여 대화를 주고받을 수 있는 봇을 만들고자 함.~~











