import { Link } from 'react-router-dom';
import styled from '@emotion/styled/macro';

type LinkProps = {
    fontSize?: string;
    fontWeight?: 'bold' | 'normal';
    color?: string;
    underline?: true | false;
    children: React.ReactNode;
    url: string;
};

const NavComponent = styled(Link) <Omit<LinkProps, 'url'>>`
    font-size: ${({ fontSize }) => fontSize ?? 'inherit'};
    font-weight: ${({ fontWeight, theme }) =>
        fontWeight ? theme.font.weight[fontWeight] : 'inherit'};
    color: ${({ color }) => color ?? 'inherit'};
    text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
    display: block;
`;

const Nav = ({
    fontSize,
    fontWeight,
    color,
    underline,
    children,
    url,
}: LinkProps) => {
    return (
        <NavComponent
            to={url}
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={color}
            underline={underline}
        >
            {children}
        </NavComponent>
    );
};

export default Nav;
