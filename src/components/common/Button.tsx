import React from 'react';
import styled from '@emotion/styled/macro';

interface ButtonProps {
    width?: string;
    height?: string;
    inverse?: boolean;
    fontSize?: 'large' | 'medium' | 'small';
    fontWeight?: 'bold' | 'normal' | 'thin';
    color?: 'white' | 'black';
    backgroundColor?: 'yellow' | 'gray' | 'main';
    type?: 'submit';
    radius?: 'large' | 'medium' | 'small';
    hoverBgColor?: 'black' | 'white';
    hoverColor?: 'gray' | 'white';
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({
    width,
    height,
    inverse,
    fontSize,
    fontWeight,
    color,
    backgroundColor,
    radius,
    type,
    hoverBgColor,
    hoverColor,
    children,
    onClick,
}: ButtonProps) => {
    const Component = styled.button`
        width: ${width ?? '150px'};
        height: ${height ?? '2.4em'};
        font-size: ${({ theme }) =>
            !fontSize ? theme.font.size.medium : theme.font.size[fontSize]};
        font-weight: ${({ theme }) =>
            !fontWeight
                ? theme.font.weight.normal
                : theme.font.weight[fontWeight]};
        color: ${inverse ? '#eee' : '#1b222d'};
        background-color: ${inverse ? '#1b222d' : '#eee'};
        cursor: pointer;
        border: none;
        border-radius: ${({ theme }) =>
            radius === 'small'
                ? theme.borderRadius.small
                : radius === 'large'
                    ? theme.borderRadius.large
                    : theme.borderRadius.medium};
        overflow: hidden;

        transition: all 0.5s;
        &:hover {
            background-color: ${inverse ? '#090B0F' : '#ddd'};
        }
    `;
    return (
        <Component
            type={type === 'submit' ? 'submit' : 'button'}
            onClick={onClick}
        >
            {children}
        </Component>
    );
};

export default Button;
