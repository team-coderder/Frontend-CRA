import React from 'react';
import styled from '@emotion/styled/macro';

interface ButtonProps {
    width?: string;
    height?: string;
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
        width: ${width ?? '250px'};
        height: ${height ?? '2.4em'};
        font-size: ${({ theme }) =>
            !fontSize ? theme.font.size.medium : theme.font.size[fontSize]};
        font-weight: ${({ theme }) =>
            !fontWeight
                ? theme.font.weight.normal
                : theme.font.weight[fontWeight]};
        color: ${({ theme }) =>
            !color ? '#d0d6ff' : theme.color.black};
        background-color: ${({ theme }) =>
            !backgroundColor
                ? '#1B222D'
                : backgroundColor == 'main'
                    ? theme.color.main.common
                    : theme.color.gray};
        cursor: pointer;
        border: none;
        border-radius: ${({ theme }) =>
            radius === 'small'
                ? theme.borderRadius.small
                : radius === 'large'
                    ? theme.borderRadius.large
                    : theme.borderRadius.medium};

        transition: all 0.5s;
        &:hover {
            color: ${({ theme }) =>
            !hoverColor ? color : theme.color[hoverColor]};
            background-color: #090B0F;
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
