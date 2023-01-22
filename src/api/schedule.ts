import { schdule } from './../types';
import axios from 'axios';
import API from './base';

type SchduleType = {
    schdule: schdule[];
};

export const getSchedule = async (userId) => {
    const res = await API.get<SchduleType>(
        `/api/schedule/calendar?userId=${userId}`,
    );
    return res;
    // const data = res.data;
    // console.log(data);
    // return data;
};

export const getGroupSchedule = (groupId) =>
    API.get<SchduleType>(`/api/schedule/teamschedule?teamId=${groupId}`);

export const postSchedule = ({ userId, scheduleName, day, start, end }) =>
    API.post(`/api/schedule/myschedule`, {
        teamId: userId,
        name: scheduleName,
        weekday: day,
        starTime: start,
        finishTime: end,
    });
