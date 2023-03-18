import { useState, useLayoutEffect } from 'react';
import { Schedule } from '..';
import { useMemberSchedule, useTeamSchedule } from '../../hooks';
import {
    isEventAllowed,
    setInset,
    showTooltip,
    hideTooltip,
} from '../../utils';
import {
    EventApi,
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
                    teamId: teamId,
                });
            }
        }
    }

    function handleEventClick(clickInfo: EventClickArg) {
        hideTooltip(clickInfo);
        if (isLeader && clickInfo.event.extendedProps.teamId) {
            if (confirm(`일정 '${clickInfo.event.title}' 를 지울까요?`)) {
                clickInfo.event.remove();
            }
        }
    }

    function handleMouseEnter(hoverInfo: EventHoveringArg) {
        showTooltip(hoverInfo);
    }

    function handleMouseLeave(leaveInfo: EventHoveringArg) {
        hideTooltip(leaveInfo);
    }

    return (
        <Schedule
            selectable={isLeader}
            eventSources={[...(teamSchedule ?? []), ...(memberSchedule ?? [])]}
            handleEvents={handleEvents}
            handleDateSelect={handleDateSelect}
            handleEventClick={handleEventClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleEventAdd={handleEventAdd}
            handleEventRemove={handleEventRemove}
        />
    );
};

export default TeamSchedule;
