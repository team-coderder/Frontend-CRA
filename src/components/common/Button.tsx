import styled from '@emotion/styled/macro';

type ButtonProps = {
    type?: 'submit';
    width?: string;
    height?: string;
    inverse?: boolean;
    fontSize?: string;
    fontWeight?: 'bold' | 'normal';
    color?: string;
    backgroundColor?: string;
    children: React.ReactNode;
    onClick?: () => void;
};

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

const Button = ({
    type,
    width,
    height,
    inverse,
    fontSize,
    fontWeight,
    color,
    backgroundColor,
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
            onClick={onClick}
        >
            {children}
        </ButtonComponent>
    );
};

export default Button;
