import React from 'react';
import NavbarLayout from '../layouts/NavbarLayout';
import { Login, Signup, AddGroup, GroupInfo, TeamSchedule } from '../views';

const mainRoutes = () => {
    return [
        {
            path: '/',
            children: [
                {
                    path: 'login',
                    element: <Login />,
                },
                {
                    path: 'signup',
                    element: <Signup />,
                },
            ],
        },
        {
            element: <NavbarLayout />,
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
