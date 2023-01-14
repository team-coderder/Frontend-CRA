import { Outlet, Navigate } from 'react-router-dom';

const AnonymousLayout = ({ user }) => {
    return !user ? <Outlet /> : <Navigate to="/myschedule" />;
};

export default AnonymousLayout;
