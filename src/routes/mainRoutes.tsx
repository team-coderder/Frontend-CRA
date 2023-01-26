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
import { useMyInfo } from '../hooks';

const mainRoutes = () => {
    const { user } = useMyInfo();

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
