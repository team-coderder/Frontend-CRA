import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
    size?: 'large' | 'medium' | 'small';
    weight?: 'bold' | 'normal';
    color?: 'black' | 'white';
    underLine?: true | false;
    fill?: boolean;
    center?: boolean;
    children: React.ReactNode;
    url: string;
}

const Nav = ({
    size,
    weight,
    color,
    underLine,
    fill,
    center,
    children,
    url,
}: LinkProps) => {
    const Component = styled(Link)`
        font-size: ${({ theme }) => theme.font.size[size ?? 'small']}px;
        font-weight: ${({ theme }) => theme.font.weight[weight ?? 'bold']};
        color: ${color};
        text-decoration: ${underLine ? 'underline' : 'none'};
        display: block;
        height: ${fill && '100%'};
        display: flex;
        justify-content: ${center ? 'center' : 'normal'};
        align-items: ${center ? 'center' : 'normal'};
    `;
    return <Component to={url}>{children}</Component>;
};

export default Nav;
