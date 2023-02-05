import React from 'react';
import styled from '@emotion/styled/macro';

interface TextInputProps {
    id?: string;
    width?: string;
    height?: string;
    marginLeft?: string;
    margin?: string;
    type?: 'none' | 'id' | 'password';
    color?: 'white' | 'black';
    error?: boolean;
    placeholder?: string;
    value?: string | number;
    message?: string;
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const WarningBox = styled.div`
    margin-top: -15px;
    color: ${({ theme }) => theme.color.warning};
    font-size: ${({ theme }) => theme.font.size.small};
`;

const Component = styled.input<TextInputProps>`
    width: ${(props) => props.width ?? '300px'};
    height: ${(props) => props.height ?? '2.4em'};
    margin: ${(props) => props.margin ?? '0'};
    color: ${({ color, theme }) => (!color ? theme.color.white : theme.color.black)};
    margin-left: ${(props) => props.marginLeft ?? '0'};
    border-bottom: ${({ theme }) => theme.color.gray} 1px solid;
    border-left: medium none;
    border-right: medium none;
    border-top: medium none;
    placeholder: ${(props) => props.placeholder};
    ::placeholder {
        color: ${({ theme }) => theme.color.white};
    }
    &:focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.color.white};
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        -webkit-text-fill-color: ${({ theme }) => theme.color.white};
        -webkit-box-shadow: none;
        transition: background-color 5000s ease-in-out 0s;
    }
`;

const Label = styled.label<{ width?: string }>`
    width: ${(props) => props.width ?? '300px'};
    flex-direction: column;
    font-size: ${({ theme }) => theme.font.size.small};
`;

const TextInput = ({
    id,
    width,
    height,
    margin,
    type,
    error,
    placeholder,
    value,
    message,
    children,
    onChange,
}: TextInputProps) => {
    return (
        <Label width={width}>
            <Component
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                width={width}
                height={height}
                message={message}
                placeholder={placeholder}
                margin={margin}
            />
            {children}
            {error && <WarningBox>{message}</WarningBox>}
        </Label>
    );
};

export default TextInput;
