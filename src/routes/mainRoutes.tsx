import { Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import AnonymousLayout from '../layouts/AnonymousLayout';
import { Login, Signup, AddGroup, GroupInfo, TeamSchedule } from '../views';

const mainRoutes = () => {
    const user = localStorage.getItem('token');

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
                    path: '/addGroup',
                    element: <AddGroup />,
                },
                {
                    path: '/groupinfo',
                    element: <GroupInfo />,
                },
                {
                    path: '/teamschedule',
                    element: <TeamSchedule />,
                },
            ],
        },
    ];
};

export default mainRoutes;
