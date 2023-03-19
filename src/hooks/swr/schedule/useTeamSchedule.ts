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
        try {
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
        } catch (e) {
            console.log(e);
        }
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
                throw Error(
                    'Sorry :(||Something went wrong. Please Try again.',
                );
            }
        } catch (e) {
            await handleError(e, alert);
            addInfo.revert();
        }
    }

    async function handleEventRemove(removeInfo: EventRemoveArg) {
        try {
            if (removeInfo.event.id) {
                await deleteTeamSchedule(removeInfo.event.id);
                mutate();
            } else {
                throw Error(
                    'Sorry :(||Something went wrong. Please Try again.',
                );
            }
        } catch (e) {
            await handleError(e, alert);
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
