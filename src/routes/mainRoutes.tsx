import React from 'react';
import NavbarLayout from '../layouts/NavbarLayout';
import {
    Login,
    Signup,
    AddGroup,
    GroupInfo,
    TeamSchedule,
    MySchedule,
} from '../views';

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
                {
                    path: '/myschedule',
                    element: <MySchedule />,
                },
            ],
        },
    ];
};

export default mainRoutes;
