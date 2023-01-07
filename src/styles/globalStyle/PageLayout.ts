import styled from '@emotion/styled/macro';

export const Container = styled.main`
    max-width: 70vw;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 7rem;
    margin-bottom: 7rem;
    padding-left: 2rem;
    padding-right: 2rem;
    color: ${({ theme }) => theme.color.white};
`;

export const Header = styled.header`
    margin-bottom: 50px;
`;

export const Field = styled.section`
    margin-bottom: 25px;
    display: flex;
    align-items: baseline;
    > h3 {
        width: 150px;
        margin-right: 50px;
        font-weight: ${({ theme }) => theme.font.weight.normal};
    }
`;

export const AlignRight = styled.div`
    display: flex;
    justify-content: flex-end;
    > * {
        margin-left: 10px;
    }
`;
