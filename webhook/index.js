import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet'
import DBSchema from '#/schema';
// import Agendash from 'agendash';

import WebhookRegister from '#/slack';
import AgendaRegister from '#/agenda';
import HWRegister from '#/agenda/homework';

import HWRouteRegister from '#/routes/homework';
import authRouter from '#/routes/auth';
import imageRouter from '#/routes/image';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
// DB connect
DBSchema();

// Import slack webhook and agenda modules.
// Below two modules shouldn't dynamically import because 
// those are worked currently in this scope. 
let webhook, agenda;
webhook = WebhookRegister();
agenda = AgendaRegister();
HWRegister({ agenda, webhook });


// regist router
const homeworkRouter = HWRouteRegister({ agenda });
app.use('/homework', homeworkRouter);
app.use('/auth', authRouter);
app.use('/image', imageRouter);

const server = app.listen(process.env.PORT || 3001, () => {
    console.log(`---------open port: ${process.env.PORT || 3001}-------------`);
});

// Export for tests
export default server;