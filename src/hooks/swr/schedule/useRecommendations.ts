import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { getAllRecommendations, getOneRecommendation } from '../../../api';
import { generateDateFromString } from '../../../utils';
import type { EventSource } from '../../../types';
import theme from '../../../styles/theme';

const useRecommendations = (teamId: string | undefined) => {
    const [span, setSpan] = useState<string>('NONE');
    const { data, error, mutate } = useSWR(
        teamId ? ['useRecommendations', teamId] : null,
        fetcher,
    );

    useEffect(() => {
        mutate();
    }, [span]);

    async function fetcher() {
        try {
            if (span === 'NONE') return [];

            const { data } =
                span === 'ALL'
                    ? await getAllRecommendations(teamId as string)
                    : await getOneRecommendation(teamId as string, span);

            const recommendsArray =
                'blocks' in data
                    ? data.blocks
                    : [
                          {
                              start: data.start,
                              end: data.end,
                          },
                      ];

            const events = recommendsArray.map((event) => {
                return {
                    ...event,
                    title: '',
                    start: generateDateFromString(event.start as string),
                    end: generateDateFromString(event.end as string),
                    display: span === 'ALL' ? 'background' : 'auto',
                    backgroundColor: theme.color.translucentPurple,
                    textColor: theme.color.white,
                };
            });
            const eventSource: EventSource[] = [
                {
                    id: 'recommend',
                    events: events,
                    className: ['recommend-event'],
                },
            ];
            return eventSource;
        } catch (e) {
            console.log(e);
        }
    }

    function changeSpan(duration: string) {
        setSpan(duration);
    }

    return {
        recommendations: data,
        error,
        changeSpan,
    };
};

export default useRecommendations;
