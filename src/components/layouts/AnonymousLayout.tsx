import { Outlet, Navigate } from 'react-router-dom';
import { useToken } from '../../hooks';

const AnonymousLayout = () => {
    const { token } = useToken();

    return !token ? <Outlet /> : <Navigate to="/myschedule" />;
};

export default AnonymousLayout;
