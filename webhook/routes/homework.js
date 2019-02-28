module.exports = ({ homeworkRouter, agenda }) => {
    homeworkRouter.post('/', (ctx, next) => {
        // time: ex) tomorrow at noon
        // homework should string
        const { homework, time } = ctx.request.body;
        console.log({ homework, time });

        // agenda.schedule :: run only once applied time
        agenda.schedule(time, 'register homework', { homework });
        ctx.body = 'register homework success';
    });
}