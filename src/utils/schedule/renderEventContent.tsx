import { EventContentArg } from '@fullcalendar/core';

export function renderEventContent(eventContent: EventContentArg) {
    return <>{eventContent.event.title}</>;
}
