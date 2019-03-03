import 'dotenv/config';
import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import HWRegister from '#/agenda/homework'; // 
// import Agendash from 'agendash';
const app = new Koa();

// Import slack webhook and agenda modules.
// Below two modules shouldn't dynamically import because 
// those are worked currently in this scope. 
let webhook, agenda;
import WebhookRegister from '#/slack';
import AgendaRegister from '#/agenda';
webhook = WebhookRegister();
agenda = AgendaRegister();
HWRegister({ agenda, webhook });

import DBSchema from '#/schema';
DBSchema();

// Koa default settings
app.use(bodyParser());
app.use(logger());

// Error Handling
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        // Error log
        ctx.app.emit('error', err, ctx);
    }
});

// Regist scheduler admin page
// https://github.com/agenda/agendash
// app.use('/admin', Agendash(agenda));

// Apply router
import HWRouteRegister from '#/routes/homework';
import authRouter from '#/routes/auth';
const homeworkRouter = HWRouteRegister({ agenda });
app.use(homeworkRouter.routes());
app.use(homeworkRouter.allowedMethods());
app.use(authRouter.routes());
app.use(authRouter.allowedMethods());

const server = app.listen(process.env.PORT || 3001, () => {
    console.log(`---------open port: ${process.env.PORT || 3001}-------------`);
});

// Export for tests
export default server;