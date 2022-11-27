import styled from '@emotion/styled';
import { generateColor } from '../../hooks/ColorMethod';
import theme from '../theme';

export const ScheduleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    padding-left: 3rem;
    padding-right: 3rem;
`;

export const TitleBox = styled.div`
    display: flex;
    min-width: 200px;
    padding-top: 5rem;
`;

export const Title = styled.div`
    display: flex;
    min-width: 150px;
    align-items: center;
    font-weight: bold;
    font-size: ${theme.font.size.medium}px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const ButtonBox = styled.div`
    margin-left: 30%;
`;

export const MainSchedule = styled.div<{ name: string }>`
    margin-top: 3rem;
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
        background-color: ${theme.color.sub.common};
    }
    .my_modal_input {
        background: #2e78d6;
    }
`;

export const MemberBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 100px;
`;
