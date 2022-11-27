import styled from '@emotion/styled';
import theme from '../theme';

const FormContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: ${({ theme }) => theme.color.white}; */
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    color: white;
`;

const Header = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${() => theme.font.size.large}px;
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
    width: 200px;
    justify-content: space-around;
`;

const HelpBox = styled.div`
    width: 150px;
    height: 50px;
    font-size: small;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${() => theme.color.main.common};
`;

const NavBox = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
`;

export { FormContainer, Header, FormBox, ExplainBox, NavBox, HelpBox };
