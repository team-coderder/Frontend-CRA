import React from 'react';
import styled from '@emotion/styled';
import { RiCloseCircleFill } from 'react-icons/ri';
import theme from '../styles/theme';

type MemberProps = {
    width?: string;
    height?: string;
    fontSize?: 'large' | 'medium' | 'small';
    color?: 'white' | 'black';
    backgroundColor?: string;
    radius?: 'large' | 'medium' | 'small';
    focusBgColor?: 'black' | 'white';
    disable?: boolean;
    space?: number;
    children: React.ReactNode;
    onClick?: () => void;
    // url: string;
};

const Component = styled.div<MemberProps>`
    position: relative;
    z-index: 1;
    width: ${(props) => props.width ?? '150px'};
    height: ${(props) => props.height ?? '40px'};
    font-size: ${(props) =>
        ({ theme }) =>
            !props.fontSize
                ? theme.font.size.medium
                : theme.font.size[props.fontSize]}px;
    color: ${(props) =>
        ({ theme }) =>
            props.color === 'black' ? theme.color.black : theme.color.white};
    background-color: ${(props) => props.backgroundColor};
    cursor: pointer;
    border: none;
    border-radius: ${(props) =>
        ({ theme }) =>
            props.radius === 'small'
                ? theme.borderRadius.small
                : props.radius === 'large'
                ? theme.borderRadius.large
                : theme.borderRadius.medium};
    transition: all 0.5s;
    &:hover {
        background-color: ${(props) =>
            ({ theme }) =>
                !props.focusBgColor
                    ? props.backgroundColor
                    : theme.color[props.focusBgColor]};
    }
    display: flex;
    justify-content: ${(props) => (props.disable ? 'space-between' : 'center')};
    align-items: center;
    margin: ${(props) => props.space}px;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const Member = ({
    width,
    height,
    fontSize,
    color,
    backgroundColor,
    radius,
    focusBgColor,
    disable,
    space,
    children,
    onClick,
}: MemberProps) => {
    return (
        <Component
            width={width}
            height={height}
            fontSize={fontSize}
            color={color}
            backgroundColor={backgroundColor}
            radius={radius}
            focusBgColor={focusBgColor}
            disable={disable}
            space={space}
            onClick={onClick}
        >
            <>
                {children}
                {disable && (
                    <RiCloseCircleFill
                        style={{
                            color: `${theme.color.white}`,
                        }}
                        onClick={() => console.log('memeber deleted!')}
                    />
                )}
            </>
        </Component>
    );
};

export default Member;
