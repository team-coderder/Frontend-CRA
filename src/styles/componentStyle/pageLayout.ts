import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';
import { ButtonComponent, TextInputComponent } from '.';

const Container = styled.div`
    margin: auto;
    ${({ theme }) => theme.break.pc} {
        padding: 0 20px;
        height: 100vh;
        min-height: 300px;
        overflow: auto;
    }
    ${({ theme }) => theme.break.tablet} {
        padding: 0;
        width: 100%;
    }
`;
const Flex = styled.div`
    display: flex;
    position: relative;
`;
const FlexPC = styled.div`
    display: flex;
    ${({ theme }) => theme.break.pc} {
        height: 100%;
    }
    ${({ theme }) => theme.break.tablet} {
        flex-direction: column;
    }
`;
const InvisiblePC = styled.div`
    ${({ theme }) => theme.break.pc} {
        display: none;
    }
`;
const InvisibleMob = styled.div`
    ${({ theme }) => theme.break.tablet} {
        display: none;
    }
`;
const Main = styled.main`
    ::-webkit-scrollbar-track {
        margin: 30px 0;
    }
    ${({ theme }) => theme.break.pc} {
        max-width: 1500px;
        min-width: 900px;
        height: calc(100% - 60px);
        padding: 30px 20px;
    }
    ${({ theme }) => theme.break.tablet} {
        min-width: 100vw;
        min-height: 80vh;
        padding: 10px;
    }
`;
const Header = styled.header<{ hover?: boolean }>`
    flex: 1;
    margin-bottom: 30px;
    & h1 {
        font-size: ${({ theme }) => theme.font.size.header};
        :hover {
            background-color: ${({ theme, hover }) =>
                hover && theme.color.paleGrey};
            transition: all 0.5s;
            border-radius: 15px;
        }
    }
`;
const Field = styled.section`
    display: flex;
    align-items: baseline;
    margin-bottom: 25px;
    :last-of-type {
        margin-bottom: 0px;
    }
    & h2 {
        min-width: 150px;
        margin-right: 50px;
        color: ${({ theme }) => theme.color.grey};
        font-size: ${({ theme }) => theme.font.size.base};
        font-weight: ${({ theme }) => theme.font.weight.normal};
    }
    & h3 {
        margin-bottom: 10px;
        color: ${({ theme }) => theme.color.grey};
        font-size: ${({ theme }) => theme.font.size.label};
        font-weight: ${({ theme }) => theme.font.weight.normal};
    }
    ${({ theme }) => theme.break.mobile} {
        display: block;
        & h2 {
            margin-bottom: 5px;
        }
        ${ButtonComponent} {
            width: 100%;
        }
    }
`;
const InputBox = styled.div`
    flex: 1;
    display: flex;
    ${({ theme }) => theme.break.mobile} {
        display: block;
        & ${TextInputComponent} {
            margin-bottom: 10px;
        }
    }
`;
const AlignRight = styled.div`
    display: flex;
    justify-content: flex-end;
    > * {
        margin-left: 10px;
    }
`;
const Icon = styled.div<{ background?: string }>`
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.round};
    color: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.shadow.float};
    background-color: ${({ theme }) => theme.color.purple};
    cursor: pointer;
`;
const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }  
`;
const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border: 10px solid ${({ theme }) => theme.color.lightPurple};
    border-top: 10px solid ${({ theme }) => theme.color.purple};
    border-radius: 50%;
    animation: ${spinner} 1s linear infinite;
    margin: auto;
`;

export {
    Container,
    Flex,
    FlexPC,
    InvisibleMob,
    InvisiblePC,
    Main,
    Header,
    Field,
    AlignRight,
    InputBox,
    Icon,
    Spinner,
};
