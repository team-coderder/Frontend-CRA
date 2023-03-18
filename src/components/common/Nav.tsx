import type { LinkProps } from '../../types';
import { NavComponent } from '../../styles/componentStyle';

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
