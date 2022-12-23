import { Outlet, Navigate } from 'react-router-dom';
import { Navbar, Groupbar } from '../components';

const AuthLayout = ({ user }) => {
    return user ? (
        <>
            <Navbar />
            <Groupbar />
            <div style={{ margin: '4rem 0 0 4rem' }}>
                <Outlet />
            </div>
        </>
    ) : (
        <Navigate to="/login" />
    );
};

export default AuthLayout;
