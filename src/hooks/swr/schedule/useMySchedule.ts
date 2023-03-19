import useSWR from 'swr';
import { useDialog, useToken } from '../..';
import {
    getMySchedule,
    createMySchedule,
    deleteMySchedule,
} from '../../../api';
import {
    generateDateFromString,
    generateStringFromDate,
    handleError,
} from '../../../utils';
import type { EventRemoveArg, EventAddArg } from '../../../types';
import theme from '../../../styles/theme';

const useMySchedule = () => {
    const { token } = useToken();
    const { data, error, isLoading, mutate } = useSWR(
        ['useMySchedule', token],
        fetcher,
    );
    const { alert } = useDialog();

    async function fetcher() {
        try {
            const { data } = await getMySchedule();
            const events = data.schedule.map((event) => {
                return {
                    ...event,
                    start: generateDateFromString(event.start as string),
                    end: generateDateFromString(event.end as string),
                    classNames: ['my-event'],
                    backgroundColor: theme.color.purple,
                    textColor: theme.color.white,
                };
            });
            return events;
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
                await createMySchedule(newEvent);
                mutate();
            } else {
                throw Error(
                    'Sorry :(||Could not add the event. Please Try again.',
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
                await deleteMySchedule(removeInfo.event.id);
                mutate();
            } else {
                throw Error(
                    'Sorry :(||Could not delete the event. Please Try again.',
                );
            }
        } catch (e) {
            await handleError(e, alert);
            removeInfo.revert();
        }
    }

    return {
        mySchedule: data,
        error,
        isLoading,
        handleEventAdd,
        handleEventRemove,
    };
};

export default useMySchedule;
