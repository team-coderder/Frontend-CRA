import styled from '@emotion/styled';

type IconProps = {
    'background-color'?: string;
};

export const Icon = styled.div<IconProps>`
    border-radius: 50%;
    background-color: ${(props) =>
        props['background-color'] ? props['background-color'] : 'transparent'};
    font-size: 1.5rem;
    cursor: pointer;
    padding: 5px;
`;
