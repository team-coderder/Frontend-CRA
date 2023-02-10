import styled from '@emotion/styled/macro';

const FormContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: auto;
`;

const Header = styled.div`
    margin: auto;
    margin-bottom: 30px;
    & h1 {
        font-size: ${({ theme }) => theme.font.size.header};
    }
`;

const FormBox = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExplainBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    width: 100%;
    justify-content: center;
    font-size: small;
`;

export { FormContainer, Header, FormBox, ExplainBox };
