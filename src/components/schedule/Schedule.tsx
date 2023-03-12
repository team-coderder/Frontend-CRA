import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
    EventApi,
    DateSelectArg,
    EventClickArg,
    EventHoveringArg,
    EventAddArg,
    EventChangeArg,
    EventRemoveArg,
} from '@fullcalendar/core';
import { renderEventContent } from '../../utils';
import { START_DATE, START_TIME } from '../../constant';
import type { UserEvent, EventSource } from '../../types';
// import '../../styles/componentStyle/schedule.css';

type ScheduleProps = {
    selectable?: boolean;
    events?: UserEvent[] | undefined;
    eventSources?: EventSource[] | undefined;
    handleEvents?: (events: EventApi[]) => void;
    handleDateSelect?: (selectInfo: DateSelectArg) => void;
    handleEventClick?: (clickInfo: EventClickArg) => void;
    handleMouseEnter?: (enterInfo: EventHoveringArg) => void;
    handleMouseLeave?: (leaveInfo: EventHoveringArg) => void;
    handleEventAdd?: (addInfo: EventAddArg) => void;
    handleEventChange?: (changeInfo: EventChangeArg) => void;
    handleEventRemove?: (removeInfo: EventRemoveArg) => void;
};

const Schedule = ({
    selectable,
    events,
    eventSources,
    handleEvents,
    handleDateSelect,
    handleEventClick,
    handleMouseEnter,
    handleMouseLeave,
    handleEventAdd,
    handleEventChange,
    handleEventRemove,
}: ScheduleProps) => {
    return (
        <>
            <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin]}
                headerToolbar={false}
                dayHeaderFormat={{ weekday: 'short' }}
                allDaySlot={false}
                initialDate={START_DATE}
                slotMinTime={START_TIME}
                firstDay={1}
                weekends={true}
                slotEventOverlap={true}
                selectable={selectable ? true : false}
                selectMirror={true}
                editable={false}
                events={events ?? []}
                eventSources={eventSources ?? []}
                eventContent={renderEventContent}
                /* update local calendar */
                eventsSet={handleEvents}
                select={handleDateSelect}
                eventClick={handleEventClick}
                eventMouseEnter={handleMouseEnter}
                eventMouseLeave={handleMouseLeave}
                /* update remote database */
                eventAdd={handleEventAdd}
                eventChange={handleEventChange}
                eventRemove={handleEventRemove}
                eventOverlap={false}
            />
            <div className="tooltip"></div>
        </>
    );
};

export default Schedule;
