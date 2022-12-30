import React from 'react';
import styled from '@emotion/styled/macro';
import { RiCloseCircleFill } from 'react-icons/ri';

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
    memberId?: number;
    children: React.ReactNode;
    onClick?: () => void;
    onDelete?: (id: number) => void;
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
                : theme.font.size[props.fontSize]};
    color: ${(props) =>
        ({ theme }) =>
            props.color === 'black' ? theme.color.black : theme.color.white};
    background-color: ${(props) => props.backgroundColor};
    cursor: ${(props) => props.onClick && 'pointer'};
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
    memberId,
    children,
    onClick,
    onDelete,
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
                            color: `${({ theme }) => theme.color.white}`,
                            cursor: 'pointer',
                        }}
                        onClick={() =>
                            onDelete && memberId && onDelete(memberId)
                        }
                    />
                )}
            </>
        </Component>
    );
};

export default Member;
