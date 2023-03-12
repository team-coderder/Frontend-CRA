import useSWR from 'swr';
import { EventRemoveArg, EventAddArg } from '@fullcalendar/core';
import { useToken } from '../..';
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
import theme from '../../../styles/theme';

const useMySchedule = () => {
    const { token } = useToken();
    const { data, error, isLoading, mutate } = useSWR(
        ['useMySchedule', token],
        fetcher,
    );

    async function fetcher() {
        const { data } = await getMySchedule();
        const events = data.schedule.map((event) => {
            return {
                ...event,
                start: generateDateFromString(event.start as string),
                end: generateDateFromString(event.end as string),
                classNames: ['my-event'],
                backgroundColor: theme.color.background.tan.dark,
                textColor: theme.font.color.main.dark,
            };
        });
        return events;
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
                alert('일정을 추가할 수 없습니다. 다시 시도해주세요.');
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
                await deleteMySchedule(removeInfo.event.id);
                mutate();
            } else {
                alert('일정을 삭제할 수 없습니다. 다시 시도해주세요.');
                removeInfo.revert();
            }
        } catch (e) {
            handleError(e);
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
