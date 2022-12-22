import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Groupbar from './Groupbar';
import { Flex } from '../../styles/navbar/groupbar';

const NavbarLayout = () => {
    return (
        <>
            <Navbar />
            <Flex>
                <Groupbar />
                <Outlet />
            </Flex>
        </>
    );
};

export default NavbarLayout;
