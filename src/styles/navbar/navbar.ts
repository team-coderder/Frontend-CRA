import styled from '@emotion/styled/macro';

export const HorizontalBar = styled.div`
    width: 100%;
    height: 3rem;
    position: sticky;
    top: 0;
    z-index: 1;
    padding-right: 5%;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > * {
        margin-left: 10px;
    }
`;
export const Name = styled.div`
    height: 2rem;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-left: 30px;
`;
export const Menu = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    padding: 10px;
    > Button:first-child {
        margin-bottom: 10px;
    }
`;
