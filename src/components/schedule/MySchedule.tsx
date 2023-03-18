import { useState } from 'react';
import { Schedule } from '..';
import { useMySchedule, useDialog } from '../../hooks';
import { isEventAllowed } from '../../utils';
import type { EventApi, DateSelectArg, EventClickArg } from '../../types';

const MySchedule = () => {
    const { mySchedule, handleEventAdd, handleEventRemove } = useMySchedule();
    const [events, setEvents] = useState<EventApi[]>([]);
    const { prompt, confirm, alert } = useDialog();

    function handleEvents(events: EventApi[]) {
        setEvents(events);
    }

    async function handleDateSelect(selectInfo: DateSelectArg) {
        const start = selectInfo.startStr;
        const end = selectInfo.endStr;
        const calendarApi = selectInfo.view.calendar;
        const res = isEventAllowed(start, end, calendarApi, events);

        if (res !== '') {
            await alert(res);
            return;
        }

        const title = await prompt('Name of the event?');

        if (title) {
            if (title.length > 20) {
                await alert(
                    'Name is too long :(',
                    'Try again with less than 20 characters',
                );
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

    async function handleEventClick(clickInfo: EventClickArg) {
        if (await confirm(`Delete this event?`, `${clickInfo.event.title}`)) {
            clickInfo.event.remove();
        }
    }

    return (
        <Schedule
            selectable={true}
            events={mySchedule}
            handleEvents={handleEvents}
            handleDateSelect={handleDateSelect}
            handleEventClick={handleEventClick}
            handleEventAdd={handleEventAdd}
            handleEventRemove={handleEventRemove}
        />
    );
};

export default MySchedule;
