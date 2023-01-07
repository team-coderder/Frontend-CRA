import { setupWorker, rest } from 'msw';

const baseURL = process.env.REACT_APP_BASE_URL;

export const worker = setupWorker(
    rest.post(baseURL + '/login', async (req, res, ctx) => {
        const token = 'ABC';

        return res(
            ctx.status(200),
            ctx.set('Authorization', `Bearer ${token}}`),
            ctx.json({
                data: {
                    username: 'max@gmail.com',
                    nickname: 'max',
                },
            }),
        );
    }),
    rest.post(baseURL + '/api/team', async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                teamId: 12,
                name: 'group1',
            }),
        );
    }),
    rest.post(baseURL + '/api/invite', async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '그룹(teamId : 12)에 멤버 2명 초대 완료',
            }),
        );
    }),
);
