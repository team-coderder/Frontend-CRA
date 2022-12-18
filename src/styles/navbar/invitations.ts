import styled from '@emotion/styled/macro';

export const InvitationTable = styled.table`
    width: 15em;
    border: none;
    border-spacing: 10px 5px;
    caption {
        color: ${({ theme }) => theme.color.gray};
        padding: 5px;
        font-size: 0.9em;
        font-weight: bold;
    }
    th {
        width: 8em;
    }
`;
