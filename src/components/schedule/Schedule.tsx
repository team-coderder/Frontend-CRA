import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { renderEventContent } from '../../utils';
import { START_DATE, START_TIME } from '../../constant';
import type { ScheduleProps } from '../../types';

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
