import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';

const Container = styled.div`
    margin: auto;
    padding: 0 30px 30px 200px;
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
    max-width: 70vw;
    min-width: 900px;
    max-height: 85vh;
    min-height: 600px;
    overflow: auto;
    padding: 80px 30px 50px;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    box-shadow: ${({ theme }) => theme.color.background.light.shadow.convex};
    ::-webkit-scrollbar-track {
        margin: 30px 0;
    }
`;
const Header = styled.header`
    margin-bottom: 30px;
    & h1 {
        font-size: ${({ theme }) => theme.font.size.header};
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
        font-size: ${({ theme }) => theme.font.size.base};
        font-weight: ${({ theme }) => theme.font.weight.normal};
    }
    & h3 {
        margin-bottom: 10px;
        color: ${({ theme }) => theme.font.color.sub};
        font-size: ${({ theme }) => theme.font.size.label};
        font-weight: ${({ theme }) => theme.font.weight.normal};
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
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.color.background.light.shadow.convex};
    font-size: 1.2rem;
    cursor: pointer;
    :hover {
        box-shadow: ${({ theme }) =>
            theme.color.background.light.shadow.concave};
    }
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
    border: 10px solid ${({ theme }) => theme.color.background.tan.main};
    border-top: 10px solid ${({ theme }) => theme.color.background.dark.main};
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
    Icon,
    Spinner,
};
