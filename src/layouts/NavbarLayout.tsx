import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar, Groupbar } from '../components';

const NavbarLayout = () => {
    return (
        <>
            <Navbar />
            <Groupbar />
            <div style={{ margin: '4rem 0 0 4rem' }}>
                <Outlet />
            </div>
        </>
    );
};

export default NavbarLayout;
