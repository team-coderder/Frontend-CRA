import styled from '@emotion/styled/macro';

const ScheduleContainer = styled.div`
    overflow: auto;
    ${({ theme }) => theme.break.pc} {
        width: 70%;
        height: 100%;
    }
    ${({ theme }) => theme.break.tablet} {
        // height: min-content;
        max-height: 85vh;
        margin-bottom: 20px;
    }
`;

export { ScheduleContainer };
