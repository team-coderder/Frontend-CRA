import { ButtonComponent } from '../../styles/componentStyle';
import type { ButtonProps } from '../../types';

const Button = ({
    type,
    width,
    height,
    inverse,
    fontSize,
    fontWeight,
    color,
    backgroundColor,
    shadow,
    children,
    onClick,
}: ButtonProps) => {
    return (
        <ButtonComponent
            type={type ? 'submit' : 'button'}
            width={width}
            height={height}
            inverse={inverse}
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={color}
            backgroundColor={backgroundColor}
            shadow={shadow}
            onClick={onClick}
        >
            {children}
        </ButtonComponent>
    );
};

export default Button;
