import { Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import AnonymousLayout from '../layouts/AnonymousLayout';
import {
    Login,
    Signup,
    MySchedule,
    AddGroup,
    GroupInfo,
    TeamSchedule,
    NotFound,
} from '../views';
import token from '../lib/token';

const mainRoutes = () => {
    const user = token.getAccessToken('token');

    return [
        {
            path: '/',
            element: user ? (
                <Navigate to="/myschedule" />
            ) : (
                <Navigate to="/login" />
            ),
        },
        {
            element: <AnonymousLayout user={user} />,
            children: [
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: '/signup',
                    element: <Signup />,
                },
            ],
        },
        {
            element: <AuthLayout user={user} />,
            children: [
                {
                    path: '/myschedule',
                    element: <MySchedule />,
                },
                {
                    path: '/teamschedule',
                    children: [
                        {
                            index: true,
                            element: <NotFound message='No group found under this ID' />,
                        },
                        {
                            path: ':teamId',
                            element: <TeamSchedule />,
                        },
                    ],
                },
                {
                    path: '/addGroup',
                    element: <AddGroup />,
                },
                {
                    path: '/groupinfo',
                    element: <GroupInfo />,
                },
            ],
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ];
};

export default mainRoutes;
