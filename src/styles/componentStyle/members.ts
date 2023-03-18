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
    color: ${({ theme }) => theme.color.grey};
    font-size: ${({ theme }) => theme.font.size.label};
`;

const SearchIDComponent = styled.div`
    position: relative;
    margin-bottom: 20px;
    display: flex;
    align-items: baseline;
`;
const SearchResultsContainer = styled.div`
    width: 100%;
    max-height: 150px;
    overflow: auto;
`;
const SearchResult = styled.div<{ missing?: boolean }>`
    height: 30px;
    background-color: ${({ missing, theme }) =>
        missing ? theme.color.lightGrey : theme.color.grey};
    color: ${({ missing, theme }) =>
        missing ? theme.color.darkGrey : theme.color.lightGrey};
    padding: 5px;
    display: flex;
    align-items: center;
    &:hover {
        cursor: ${({ missing }) => !missing && 'pointer'};
        background-color: ${({ theme, missing }) =>
            !missing && theme.color.darkGrey};
    }
    transition: all 0.2s;
`;

export {
    MembersComponent,
    NoticeText,
    SearchIDComponent,
    SearchResultsContainer,
    SearchResult,
};
