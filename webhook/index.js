const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const Agendash = require('agendash');
require('dotenv').config();

// Regist homework config datas
const webhook = require('./slack')();
const agenda = require('./agenda')();
require('./agenda/homework')({ webhook, agenda });

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
        ctx.app.emit('error', err, ctx);
    }
});

// Error Listener
app.on('error', (err, ctx) => {
    console.log('-------------error----------------');
    console.error(err);
});

// Regist scheduler admin page
// https://github.com/agenda/agendash
app.use('/admin', Agendash(agenda));

// Regist routers
const router = new Router();
const homeworkRouter = new Router({
    prefix: '/homework'
});
require('./routes/basic')({ router });
require('./routes/homework')({ homeworkRouter, agenda });

app.use(router.routes());
app.use(router.allowedMethods());
app.use(homeworkRouter.routes());
app.use(homeworkRouter.allowedMethods());

const server = app.listen(3000);
module.exports = server;