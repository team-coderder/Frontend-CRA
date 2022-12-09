import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Groupbar from './Groupbar';

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
