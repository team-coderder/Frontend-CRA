import { Outlet, Navigate } from 'react-router-dom';
import { Navbar, Groupbar } from '..';
import { Container, Flex } from '../../styles/componentStyle/navbar';

const AuthLayout = ({ user }) => {
    return user ? (
        <>
            <Container>
                <Navbar />
                <Flex>
                    <Groupbar />
                    <Outlet />
                </Flex>
            </Container>
        </>
    ) : (
        <Navigate to="/login" />
    );
};

export default AuthLayout;
