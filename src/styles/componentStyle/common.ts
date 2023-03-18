import { Link } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import type { ButtonProps, MemberProps, LinkProps } from '../../types';

const ButtonComponent = styled.button<Omit<ButtonProps, 'type'>>`
    width: ${({ width }) => width ?? '150px'};
    height: ${({ height }) => height ?? '2.4em'};
    font-size: ${({ fontSize, theme }) => fontSize ?? theme.font.size.base};
    font-weight: ${({ fontWeight, theme }) =>
        fontWeight ? theme.font.weight[fontWeight] : theme.font.weight.normal};
    color: ${({ color, inverse, theme }) =>
        color
            ? color
            : inverse
            ? theme.font.color.main.light
            : theme.font.color.main.dark};
    background-color: ${({ backgroundColor, inverse, theme }) =>
        backgroundColor
            ? backgroundColor
            : inverse
            ? theme.color.background.dark.main
            : theme.color.background.light.main};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    cursor: pointer;
    overflow: hidden;
    transition: all 0.5s;
    &:hover {
        background-color: ${({ backgroundColor, inverse, theme }) =>
            !backgroundColor && inverse
                ? theme.color.background.dark.hover
                : theme.color.background.light.hover};
    }
`;

const MemberComponent = styled.div<MemberProps>`
    position: relative;
    width: ${({ width }) => width ?? '130px'};
    height: ${({ height }) => height ?? '2.4em'};
    padding: 0 1rem;
    font-size: ${({ fontSize, theme }) => fontSize ?? theme.font.size.base};
    color: ${({ theme }) => theme.font.color.main.dark};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    transition: all 0.5s;
    &:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    }

    display: flex;
    justify-content: ${({ deletable }) => deletable && 'space-between'};
    align-items: center;
`;
const MemberName = styled.div<{ deletable?: boolean }>`
    max-width: ${({ deletable }) => deletable && '100px'};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const ModalComponent = styled.div`
    position: relative;
`;
const ToggleMenu = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
`;

const NavComponent = styled(Link)<Omit<LinkProps, 'url'>>`
    font-size: ${({ fontSize }) => fontSize ?? 'inherit'};
    font-weight: ${({ fontWeight, theme }) =>
        fontWeight ? theme.font.weight[fontWeight] : 'inherit'};
    color: ${({ color }) => color ?? 'inherit'};
    text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
    display: flex;
    align-items: baseline;
    width: ${({ spread }) => spread && '100%'};
`;

const TextInputComponent = styled.div<{ width?: string; margin?: string }>`
    width: ${({ width }) => width ?? '300px'};
    margin: ${({ margin }) => margin ?? '20px 0px'};
`;
const Input = styled.input<{ height?: string; placeholder?: string }>`
    width: 100%;
    height: ${({ height }) => height ?? '2.4em'};
    border: none;
    border-bottom: ${({ theme }) => theme.font.color.sub} 1px solid;
    placeholder: ${({ placeholder }) => placeholder};
    &::placeholder {
        color: ${({ theme }) => theme.font.color.sub};
    }
    &:focus {
        outline: none;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        -webkit-box-shadow: none;
        transition: background-color 5000s ease-in-out 0s;
    }
`;
const WarnText = styled.div`
    margin-top: 10px;
    color: ${({ theme }) => theme.font.color.warning};
    font-size: ${({ theme }) => theme.font.size.label};
`;

export {
    ButtonComponent,
    MemberComponent,
    MemberName,
    ModalComponent,
    ToggleMenu,
    NavComponent,
    TextInputComponent,
    Input,
    WarnText,
};
