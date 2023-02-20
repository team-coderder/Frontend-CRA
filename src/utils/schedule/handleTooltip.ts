import { EventHoveringArg } from '@fullcalendar/core';

function onMouseMove(event: MouseEvent) {
    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    if (tooltip) {
        tooltip.style.left = event.pageX + 10 + 'px';
        tooltip.style.top = event.pageY + 20 + 'px';
    }
}

export function showTooltip(eventInfo: EventHoveringArg) {
    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    if (tooltip) {
        tooltip.classList.add('show');
        tooltip.textContent =
            eventInfo.event.title +
            '\r\n' +
            (eventInfo.event.extendedProps.nickname ?? '');
        eventInfo.el.addEventListener('mousemove', onMouseMove);
    }
}

export function hideTooltip(eventInfo: EventHoveringArg) {
    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    if (tooltip) {
        tooltip.classList.remove('show');
        eventInfo.el.removeEventListener('mousemove', onMouseMove);
    }
}
