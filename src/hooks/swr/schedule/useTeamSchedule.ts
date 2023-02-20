import useSWR from 'swr';
import { EventAddArg, EventRemoveArg } from '@fullcalendar/core';
import {
    getTeamSchedule,
    createTeamSchedule,
    deleteTeamSchedule,
} from '../../../api';
import {
    generateDateFromString,
    generateStringFromDate,
    handleError,
} from '../../../utils';
import type { EventSource } from '../../../types';

const useTeamSchedule = (teamId: number) => {
    const { data, error, mutate } = useSWR(
        ['useTeamSchedule', teamId],
        fetcher,
    );

    async function fetcher() {
        const { data } = await getTeamSchedule(teamId);

        const events = data.schedule.map((event) => {
            return {
                ...event,
                teamId: teamId,
                start: generateDateFromString(event.start as string),
                end: generateDateFromString(event.end as string),
            };
        });
        const eventSource: EventSource[] = [
            {
                id: 'team',
                events: events,
                className: ['team-event'],
            },
        ];
        return eventSource;
    }

    async function handleEventAdd(addInfo: EventAddArg) {
        try {
            if (addInfo.event.title && addInfo.event.start && addInfo.event.end) {
                const newEvent = {
                    title: addInfo.event.title,
                    start: generateStringFromDate(addInfo.event.start),
                    end: generateStringFromDate(addInfo.event.end),
                };
                await createTeamSchedule(teamId, newEvent);
                addInfo.revert();
                mutate();
            } else {
                alert('에러. 일정을 추가할 수 없습니다');
                addInfo.revert();
            }
        } catch (e) {
            handleError(e);
        }
    }

    async function handleEventRemove(removeInfo: EventRemoveArg) {
        try {
            if (removeInfo.event.id) {
                await deleteTeamSchedule(removeInfo.event.id);
                mutate();
            } else {
                alert('에러. 일정을 삭제할 수 없습니다');
                removeInfo.revert();
            }
        } catch (e) {
            handleError(e);
        }
    }

    return {
        teamSchedule: data,
        error,
        handleEventAdd,
        handleEventRemove,
    };
};

export default useTeamSchedule;
