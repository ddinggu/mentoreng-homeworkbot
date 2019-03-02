import Router from 'koa-router';
import User from '#/schema/user'
const router = new Router({
    prefix: '/auth'
});

router.post('/', async (ctx, next) => {
    const { id, password } = ctx.request.body;

    try {
        const getUser = await User.find({ id });

        if (!!getUser[0]) {
            if (getUser[0].password === password) {
                ctx.body = { result: true, msg: '로그인 성공' };
            } else {
                ctx.body = { result: false, msg: '비밀번호를 확인해주세요' };
            }
        } else {
            ctx.body = { result: false, msg: '아이디를 확인해주세요' };
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
});

export default router;
