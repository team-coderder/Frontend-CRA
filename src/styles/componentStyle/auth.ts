import styled from '@emotion/styled/macro';

const AuthComponent = styled.div`
    width: 300px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    margin: auto;
`;
const AuthHeader = styled.div`
    margin: auto;
    margin-bottom: 30px;
    & h1 {
        font-size: ${({ theme }) => theme.font.size.header};
    }
`;
const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ExplainText = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    width: 100%;
    justify-content: center;
    font-size: small;
`;

export { AuthComponent, FormContainer, AuthHeader, ExplainText };
