import { Link } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import type { ButtonProps, MemberProps, LinkProps } from '../../types';

const ButtonComponent = styled.button<Omit<ButtonProps, 'type'>>`
    width: ${({ width }) => width ?? '120px'};
    height: ${({ height }) => height ?? '2rem'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ fontSize, theme }) => fontSize ?? theme.font.size.base};
    font-weight: ${({ fontWeight, theme }) =>
        fontWeight ? theme.font.weight[fontWeight] : theme.font.weight.normal};
    color: ${({ color, inverse, theme }) =>
        color ? color : inverse ? theme.color.white : theme.color.darkGrey};
    background-color: ${({ backgroundColor, inverse, theme }) =>
        backgroundColor
            ? backgroundColor
            : inverse
            ? theme.color.purple
            : theme.color.lightPurple};
    box-shadow: ${({ theme, shadow }) => shadow && theme.shadow.float};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    cursor: pointer;
    overflow: hidden;
    transition: all 0.5s;
    :hover {
        background-color: ${({ backgroundColor, inverse, theme }) =>
            !backgroundColor && inverse
                ? theme.color.darkPurple
                : theme.color.lightGrey};
    }
`;

const MemberComponent = styled.div<MemberProps>`
    position: relative;
    width: ${({ width }) => width ?? '130px'};
    height: ${({ height }) => height ?? '2.4em'};
    padding: 0 1rem;
    font-size: ${({ fontSize, theme }) => fontSize ?? theme.font.size.base};
    color: ${({ theme }) => theme.color.darkGrey};
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
    width: ${({ width }) => width ?? '100%'};
    flex: 1;
    margin: ${({ margin }) => margin ?? '20px 0px'};
`;
const Input = styled.input<{ height?: string; placeholder?: string }>`
    width: 100%;
    height: ${({ height }) => height ?? '2.4em'};
    border: none;
    border-bottom: ${({ theme }) => theme.color.grey} 1px solid;
    placeholder: ${({ placeholder }) => placeholder};
    &::placeholder {
        color: ${({ theme }) => theme.color.grey};
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
    color: ${({ theme }) => theme.color.darkPink};
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
