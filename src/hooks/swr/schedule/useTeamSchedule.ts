import useSWR from 'swr';
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
import type { EventSource, EventRemoveArg, EventAddArg } from '../../../types';
import theme from '../../../styles/theme';
import { useDialog } from '../..';

const useTeamSchedule = (teamId: string | undefined) => {
    const { data, error, mutate } = useSWR(
        teamId ? ['useTeamSchedule', teamId] : null,
        fetcher,
    );
    const { alert } = useDialog();

    async function fetcher() {
        const { data } = await getTeamSchedule(Number(teamId));

        const events = data.schedule.map((event) => {
            return {
                ...event,
                teamId: teamId,
                start: generateDateFromString(event.start as string),
                end: generateDateFromString(event.end as string),
                backgroundColor: theme.color.translucentPurple,
                textColor: theme.color.white,
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
            if (
                addInfo.event.title &&
                addInfo.event.start &&
                addInfo.event.end
            ) {
                const newEvent = {
                    title: addInfo.event.title,
                    start: generateStringFromDate(addInfo.event.start),
                    end: generateStringFromDate(addInfo.event.end),
                };
                await createTeamSchedule(Number(teamId), newEvent);
                addInfo.revert();
                mutate();
            } else {
                await alert(
                    'Sorry :(',
                    'Could not add the event. Please Try again.',
                );
                addInfo.revert();
            }
        } catch (e) {
            handleError(e);
            addInfo.revert();
        }
    }

    async function handleEventRemove(removeInfo: EventRemoveArg) {
        try {
            if (removeInfo.event.id) {
                await deleteTeamSchedule(removeInfo.event.id);
                mutate();
            } else {
                await alert(
                    'Sorry :(',
                    'Could not delete the event. Please Try again.',
                );
                removeInfo.revert();
            }
        } catch (e) {
            handleError(e);
            removeInfo.revert();
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
