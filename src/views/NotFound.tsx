import { Container } from '../styles/globalStyle/PageLayout';

const NotFound = ({ message }: { message?: string }) => {
    return (
        <Container>
            <h1>{message ? message : 'Page Not Found'}</h1>
        </Container>
    );
};

export default NotFound;
