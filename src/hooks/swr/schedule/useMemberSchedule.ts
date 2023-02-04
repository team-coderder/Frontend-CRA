import useSWR from 'swr';
import { getMembersSchedule } from '../../../api';
import { generateColor, generateDateFromString } from '../../../utils';
import { EventSource } from '../../../types';

const useMemberSchedule = (teamId: number) => {
    const { data, error } = useSWR(['useMemberSchedule', teamId], fetcher);

    async function fetcher() {
        const { data } = await getMembersSchedule(teamId);

        const eventSource: EventSource[] = data.map(
            ({ username, schedule }) => {
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