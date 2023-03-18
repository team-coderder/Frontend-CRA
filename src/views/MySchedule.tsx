import { useState } from 'react';
import { Schedule } from '../components';
import { useMySchedule } from '../hooks';
import { isEventAllowed } from '../utils';
import type { EventApi, DateSelectArg, EventClickArg } from '../types';
import { Main, Header } from '../styles/globalStyle/PageLayout';

const MySchedule = () => {
    const { mySchedule, handleEventAdd, handleEventRemove } = useMySchedule();
    const [events, setEvents] = useState<EventApi[]>([]);

    function handleEvents(events: EventApi[]) {
        setEvents(events);
    }

    function handleDateSelect(selectInfo: DateSelectArg) {
        const start = selectInfo.startStr;
        const end = selectInfo.endStr;
        const calendarApi = selectInfo.view.calendar;

        if (isEventAllowed(start, end, calendarApi, events)) {
            const title = prompt('일정을 입력하세요');
            if (title) {
                if (title.length > 20) {
                    alert('일정 이름이 너무 깁니다 (20자 이하)');
                    return;
                }
                calendarApi.addEvent({
                    id: 'temp_id', // 바로 삭제하기 위해 필요
                    title,
                    start,
                    end,
                });
            }
        }
    }

    function handleEventClick(clickInfo: EventClickArg) {
        if (confirm(`일정 '${clickInfo.event.title}' 를 지울까요?`)) {
            clickInfo.event.remove();
        }
    }

    return (
        <Main>
            <Header>
                <h1>내 스케쥴</h1>
            </Header>
            <Schedule
                selectable={true}
                events={mySchedule}
                handleEvents={handleEvents}
                handleDateSelect={handleDateSelect}
                handleEventClick={handleEventClick}
                handleEventAdd={handleEventAdd}
                handleEventRemove={handleEventRemove}
            />
        </Main>
    );
};

export default MySchedule;
