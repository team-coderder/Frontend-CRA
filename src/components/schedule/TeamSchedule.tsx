import { useState, useLayoutEffect } from 'react';
import { Schedule, Recommendation } from '..';
import {
    useDialog,
    useMemberSchedule,
    useTeamSchedule,
    useRecommendations,
} from '../../hooks';
import {
    isEventAllowed,
    setInset,
    showTooltip,
    hideTooltip,
} from '../../utils';
import {
    EventApi,
    CustomDateSelectArg,
    DateSelectArg,
    EventClickArg,
    EventHoveringArg,
    TeamScheduleProps,
} from '../../types';

const TeamSchedule = ({ teamId, isLeader, teamInfo }: TeamScheduleProps) => {
    const [events, setEvents] = useState<EventApi[]>([]);
    const { memberSchedule } = useMemberSchedule(teamId);
    const { teamSchedule, handleEventAdd, handleEventRemove } =
        useTeamSchedule(teamId);
    const { recommendations, changeSpan } = useRecommendations(teamId);
    const { prompt, alert, confirm } = useDialog();

    useLayoutEffect(() => {
        if (
            teamInfo?.teamMembers?.length &&
            (memberSchedule?.length || teamSchedule?.length)
        ) {
            setInset(teamInfo?.teamMembers?.length);
        }
    }); // Must trigger on every render. Otherwise, FullCalendar default inset is applied.

    function handleEvents(events: EventApi[]) {
        const teamEvents = events.filter(
            (event) => event.extendedProps.teamId !== undefined,
        );
        setEvents(teamEvents);
    }

    async function handleDateSelect(
        selectInfo: DateSelectArg | CustomDateSelectArg,
    ) {
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
                teamId: teamId,
            });
        }
    }

    async function handleEventClick(clickInfo: EventClickArg) {
        hideTooltip(clickInfo);

        if (clickInfo.event.source?.id === 'recommend') {
            const recommendedEvent = {
                startStr: clickInfo.event.startStr,
                endStr: clickInfo.event.endStr,
                view: clickInfo.view,
            };
            return handleDateSelect(recommendedEvent);
        }

        if (
            isLeader &&
            clickInfo.event.extendedProps.teamId &&
            (await confirm(`Delete this event?`, `${clickInfo.event.title}`))
        ) {
            clickInfo.event.remove();
        }
    }

    function handleMouseEnter(hoverInfo: EventHoveringArg) {
        showTooltip(hoverInfo);
    }

    function handleMouseLeave(leaveInfo: EventHoveringArg) {
        hideTooltip(leaveInfo);
    }

    return (
        <>
            <Recommendation changeSpan={changeSpan} />
            <Schedule
                selectable={isLeader}
                eventSources={[
                    ...(teamSchedule ?? []),
                    ...(memberSchedule ?? []),
                    ...(recommendations ?? []),
                ]}
                handleEvents={handleEvents}
                handleDateSelect={handleDateSelect}
                handleEventClick={handleEventClick}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleEventAdd={handleEventAdd}
                handleEventRemove={handleEventRemove}
            />
        </>
    );
};

export default TeamSchedule;
