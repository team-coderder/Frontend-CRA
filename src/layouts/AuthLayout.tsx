import { Outlet, Navigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Groupbar from './navbar/Groupbar';
import { Flex } from '../styles/navbar/groupbar';

const AuthLayout = ({ user }) => {
    return user ? (
        <>
            <Navbar />
            <Flex>
                <Groupbar />
                <Outlet />
            </Flex>
        </>
    ) : (
        <Navigate to="/login" />
    );
};

export default AuthLayout;
