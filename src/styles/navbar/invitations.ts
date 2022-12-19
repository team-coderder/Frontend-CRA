import styled from '@emotion/styled/macro';

export const InvitationTable = styled.table`
    width: 15em;
    border-collapse: collapse;
    caption {
        color: ${({ theme }) => theme.color.gray};
        padding: 5px;
        font-size: 0.9em;
        font-weight: bold;
    }
    th {
        width: 8em;
        border-top: 10px solid transparent;
    }
    td {
        border-left: 10px solid transparent;
        border-top: 10px solid transparent;
    }
`;
