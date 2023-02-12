import { Navigate } from 'react-router-dom';
import { AuthLayout, AnonymousLayout } from '../components';
import {
    Login,
    Signup,
    MySchedule,
    AddGroup,
    GroupInfo,
    TeamSchedule,
    NotFound,
} from '../views';

const mainRoutes = () => {
    return [
        {
            path: '/',
            element: <Navigate to="/myschedule" />,
        },
        {
            element: <AnonymousLayout />,
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
            element: <AuthLayout />,
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
                            element: (
                                <NotFound message="No group found under this ID" />
                            ),
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
                    children: [
                        {
                            index: true,
                            element: (
                                <NotFound message="No group found under this ID" />
                            ),
                        },
                        {
                            path: ':teamId',
                            element: <GroupInfo />,
                        },
                    ],
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
