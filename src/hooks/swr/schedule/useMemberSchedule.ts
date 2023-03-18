import useSWR from 'swr';
import { getMembersSchedule } from '../../../api';
import { generateColor, generateDateFromString } from '../../../utils';
import type { EventSource } from '../../../types';

const useMemberSchedule = (teamId: string | undefined) => {
    const { data, error } = useSWR(
        teamId ? ['useMemberSchedule', teamId] : null,
        fetcher,
    );

    async function fetcher() {
        const { data } = await getMembersSchedule(Number(teamId));

        const eventSource: EventSource[] = data.map(
            ({ username, schedule }, index) => {
                const events = schedule.map((event) => {
                    return {
                        ...event,
                        start: generateDateFromString(event.start as string),
                        end: generateDateFromString(event.end as string),
                    };
                });

                return {
                    id: username,
                    events: events,
                    backgroundColor: generateColor(username),
                    editable: false,
                    className: [`index-${index}`],
                };
            },
        );
        return eventSource;
    }

    return {
        memberSchedule: data,
        error,
    };
};

export default useMemberSchedule;
