import styled from '@emotion/styled/macro';

type VerticalBarProps = {
    width?: string;
};
export const VerticalBar = styled.div<VerticalBarProps>`
    width: ${({ width }) => width};
    background-color: ${({ theme }) => theme.color.white};
    transition: all 0.2s;
    position: relative;
`;
export const Flex = styled.div`
    display: flex;
`;
export const GroupList = styled.div`
    position: sticky;
    top: 3rem;
    padding: 1em;
    height: calc(100vh - 3rem);
    overflow: hidden;
`;
export const GroupName = styled.div`
    height: 3em;
    padding: 1em 0.5em;
    font-size: 1.1rem;
    white-space: nowrap;
    overflow: hidden;
`;
export const Bottom = styled.div`
    position: absolute;
    bottom: 0;
    padding-bottom: 1rem;
`;
