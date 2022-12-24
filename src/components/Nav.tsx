import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
    size?: 'large' | 'medium' | 'small';
    weight?: 'bold';
    color?: 'black' | 'white';
    underLine?: true | false;
    fill?: boolean;
    children: React.ReactNode;
    url: string;
}

const Nav = ({
    size,
    weight,
    color,
    underLine,
    fill,
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
        justify-content: center;
        align-items: center;
    `;
    return <Component to={url}>{children}</Component>;
};

export default Nav;
