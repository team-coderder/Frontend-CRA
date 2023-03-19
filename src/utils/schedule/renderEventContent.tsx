import type { EventContentArg } from '../../types';

export function renderEventContent(eventContent: EventContentArg) {
    if (
        eventContent.event.source?.id &&
        eventContent.event.source.id !== 'team'
    ) {
        return <></>;
    }
    return <>{eventContent.event.title}</>;
}
