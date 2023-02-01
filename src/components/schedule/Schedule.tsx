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
import { WEEK_START, START_TIME } from '../../constant';
import type { Event, EventSource } from '../../types';

type ScheduleProps = {
    selectable?: boolean;
    events?: Event[];
    eventSources?: EventSource[];
    handleEvents?: (events: EventApi[]) => void;
    handleDateSelect?: (selectInfo: DateSelectArg) => void;
    handleEventClick?: (clickInfo: EventClickArg) => void;
    handleMouseEnter?: (enterInfo: EventHoveringArg) => void;
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
    handleEventAdd,
    handleEventChange,
    handleEventRemove,
}: ScheduleProps) => {
    return (
        <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin]}
            headerToolbar={false}
            dayHeaderFormat={{ weekday: 'short' }}
            allDaySlot={false}
            initialDate={WEEK_START}
            slotMinTime={START_TIME}
            firstDay={1}
            weekends={true}
            slotEventOverlap={false}
            selectable={selectable ? true : false}
            selectMirror={true}
            editable={false}
            events={events}
            eventSources={eventSources}
            eventContent={renderEventContent}
            /* update local calendar */
            eventsSet={handleEvents}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventMouseEnter={handleMouseEnter}
            /* update remote database */
            eventAdd={handleEventAdd}
            eventChange={handleEventChange}
            eventRemove={handleEventRemove}
        />
    );
};

export default Schedule;
