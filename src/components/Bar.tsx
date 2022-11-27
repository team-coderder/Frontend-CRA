import React from 'react';
import styled from '@emotion/styled';

interface Props {
    vertical?: boolean;
    breadth?: string;
    background?: string;
    children: React.ReactNode;
    align_end?: boolean;
    margin?: string;
    padding?: string;
}

const StyledBar = styled.div<Props>`
    position: fixed;
    top: 0;
    height: ${({ vertical, breadth }) => (vertical ? '100%' : breadth)};
    width: ${({ vertical, breadth }) => (!vertical ? '100vw' : breadth)};
    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};
    background-color: ${({ theme, background }) =>
        background ?? theme.color.white};
    display: flex;
    align-items: left;
    flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
    justify-content: ${({ align_end }) =>
        align_end ? 'flex-end' : 'flex-start'};
    transition: all 0.5s;
    > * {
        margin: 1rem;
    }
`;

const Bar = ({
    vertical,
    breadth = '4rem',
    background,
    children,
    align_end,
    margin,
    padding,
}: Props) => {
    return (
        <StyledBar
            vertical={vertical}
            breadth={breadth}
            background={background}
            align_end={align_end}
            margin={margin}
            padding={padding}
        >
            {children}
        </StyledBar>
    );
};

export default Bar;
