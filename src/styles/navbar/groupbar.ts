import styled from '@emotion/styled/macro';

export const Container = styled.div`
    margin: auto;
    padding: 0 30px 30px 200px;
`;
export const Flex = styled.div`
    display: flex;
    position: relative;
`;

export const VerticalBar = styled.div<{ width: string }>`
    height: 100%;
    width: ${({ width }) => width};
    padding: 10px;
    transition: all 0.2s;
    position: absolute;
    left: calc(-1 * ${({ width }) => width});
`;
export const GroupList = styled.div`
    position: sticky;
    top: 3rem;
    height: min(100%, 70vh);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: rgba(208, 214, 255, 0.7); //#d0d6ff;
`;
export const GroupName = styled.div`
    height: 3em;
    padding: 1em 0.5em;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
`;
export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: calc(100% - 4rem);
    overflow: auto;
    padding-top: 10px;
`;
export const Bottom = styled.div`
    padding-top: 10px;
`;
