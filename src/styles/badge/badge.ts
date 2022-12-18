import styled from '@emotion/styled';

type IconProps = {
    background?: string;
};

export const Icon = styled.div<IconProps>`
    border-radius: 50%;
    background-color: ${(props) => props.background ?? 'transparent'};
    font-size: 1.5rem;
    cursor: pointer;
    height: 1.5em;
    width: 1.5em;
    text-align: center;
    line-height: 1.5em;
    // padding: 5px;
`;
