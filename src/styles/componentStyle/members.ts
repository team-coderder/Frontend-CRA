import styled from '@emotion/styled/macro';

const MembersComponent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 130px);
    gap: 5px;
    :not(:last-of-type) {
        margin-bottom: 20px;
    }
`;
const NoticeText = styled.div`
    color: ${({ theme }) => theme.font.color.sub};
    font-size: ${({ theme }) => theme.font.size.label};
`;

const SearchIDComponent = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const SearchResultsContainer = styled.div`
    position: absolute;
    top: 30px;
    width: 300px;
    max-height: 150px;
    overflow: auto;
`;
const SearchResult = styled.div<{ missing?: boolean }>`
    height: 30px;
    background-color: ${({ missing, theme }) =>
        missing
            ? theme.color.background.light.hover
            : theme.color.background.dark.main};
    color: ${({ missing, theme }) =>
        missing ? theme.font.color.main.dark : theme.font.color.main.light};
    padding: 5px;
    display: flex;
    align-items: center;
    &:hover {
        cursor: ${({ missing }) => !missing && 'pointer'};
        background-color: ${({ theme, missing }) =>
            !missing && theme.color.background.dark.hover};
    }
`;

export {
    MembersComponent,
    NoticeText,
    SearchIDComponent,
    SearchResultsContainer,
    SearchResult,
};
