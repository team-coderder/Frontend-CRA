import { Main } from '../styles/componentStyle';

const NotFound = ({ message }: { message?: string }) => {
    return (
        <Main>
            <h1>{message ? message : 'Page Not Found'}</h1>
        </Main>
    );
};

export default NotFound;
