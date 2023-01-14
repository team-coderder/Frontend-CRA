import styled from '@emotion/styled/macro';
import { generateColor } from '../../hooks/ColorMethod';

export const MainSchedule = styled.div<{ name: string }>`
    margin-bottom: 50px;
    .calendar_default_event_inner {
        background: ${(props) => generateColor(props.name)};
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 10pt;
        padding: 5px;
        opacity: 0.8;
    }
    .my_modal_inner {
        background-color: ${({ theme }) => theme.color.sub.common};
    }
    .my_modal_input {
        background: #2e78d6;
    }
`;

export const MemberBox = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    gap: 10px;
`;
