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
);
