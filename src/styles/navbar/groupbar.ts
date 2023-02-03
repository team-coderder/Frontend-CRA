import styled from '@emotion/styled/macro';

type VerticalBarProps = {
    width: string;
};

export const Container = styled.div`
    // margin: auto;
`;
export const Flex = styled.div`
    display: flex;
    position: relative;
`;

export const VerticalBar = styled.div<VerticalBarProps>`
    height: 100%;
    border: 1px solid yellow;
    width: ${({ width }) => width};
    transition: all 0.2s;
    position: absolute;
    left: calc(-1 * ${({ width }) => width});
`;
export const GroupList = styled.div`
    border: 1px solid red;
    position: sticky;
    top: 3rem;
    padding: 1em;
    // height: calc(100vh - 3rem);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: rgba(208, 214, 255, 0.7); //#d0d6ff;
`;
export const GroupName = styled.div`
    height: 3em;
    padding: 1em 0.5em;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
`;
export const List = styled.div`
    // height: calc(100vh - 12rem);
    height: 100%;
    overflow: auto;
    border: 1px solid pink;
`;
export const Bottom = styled.div`
    position: absolute;
    bottom: 0;
    padding-bottom: 1rem;
`;
