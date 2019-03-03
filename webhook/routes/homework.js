import Router from 'koa-router';
const homeworkRouter = new Router({
    prefix: '/homework'
});

export default ({ agenda }) => {
    homeworkRouter.post('/', (ctx, next) => {
        // time: ex) tomorrow at noon
        // homework should string
        const { homework, time } = ctx.request.body;
        console.log({ homework, time });

        // agenda.schedule :: run only once applied time
        agenda.schedule(time, 'register homework', { homework });
        ctx.body = {
            result: true,
            msg: '과제 등록 성공'
        }
    });

    return homeworkRouter;
}