import { EventContentArg } from '@fullcalendar/core';

export function renderEventContent(eventContent: EventContentArg) {
    if (
        eventContent.event.source?.id &&
        eventContent.event.source.id !== 'team'
    ) {
        return <></>;
    }
    return <>{eventContent.event.title}</>;
}
