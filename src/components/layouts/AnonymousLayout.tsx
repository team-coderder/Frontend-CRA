import { Outlet, Navigate } from 'react-router-dom';
import { useMyInfo } from '../../hooks';

const AnonymousLayout = () => {
    const { user } = useMyInfo();

    return !user ? <Outlet /> : <Navigate to="/myschedule" />;
};

export default AnonymousLayout;
