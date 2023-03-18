import styled from '@emotion/styled/macro';

const GroupListComponent = styled.div`
    width: 100%;
    max-height: 70vh;
    overflow-y: auto;
`;
const GroupsComponent = styled.div`
    display: flex;
    flex-direction: column;
    // height: calc(100% - 4rem)
    width: 100%;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
const Group = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    :hover {
    }
    transition: all 0.5s;
`;
const GroupName = styled.div<{ active?: boolean; limitWidth?: boolean }>`
    padding: 0.5em;
    font-weight: ${({ active, theme }) => active && theme.font.weight.bold};
    max-width: ${({ limitWidth }) => limitWidth && 'calc(100% - 120px)'};
`;
const LabelText = styled.div`
    // font-size: ${({ theme }) => theme.font.size.label};
    // line-height: ${({ theme }) => theme.font.size.label};
`;
const Buttons = styled.div`
    display: flex;
    align-items: center;
    > :first-of-type {
        margin-right: 10px;
    }
`;

export {
    GroupsComponent,
    GroupListComponent,
    Group,
    GroupName,
    LabelText,
    Buttons,
};
