import styled from '@emotion/styled/macro';

export const InvitationTable = styled.table`
    // width: 15em;
    border-collapse: collapse;
    caption {
        color: ${({ theme }) => theme.color.gray};
        padding: 5px;
        font-size: 0.9em;
        // font-weight: bold;
    }
    th {
        color: #eee;
        font-weight: 300;
        width: 8em;
        border-top: 10px solid transparent;
    }
    td {
        border-left: 10px solid transparent;
        border-top: 10px solid transparent;
    }
`;

export const NoticeText = styled.div`

color: rgba(208, 214, 255, 0.7); //#d0d6ff;
    padding: 1rem;
    display: flex;
    justify-content: center;
`;
