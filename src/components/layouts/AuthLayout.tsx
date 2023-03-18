import { Outlet, Navigate } from 'react-router-dom';
import { Navbar, Footer } from '..';
import { Container, Flex } from '../../styles/componentStyle';
import { useToken } from '../../hooks';

const AuthLayout = () => {
    const { token, isLoading } = useToken();

    return token || isLoading ? (
        <>
            <Container>
                <Navbar />
                <Outlet />
                <Footer />
            </Container>
        </>
    ) : (
        <Navigate to="/login" />
    );
};

export default AuthLayout;
