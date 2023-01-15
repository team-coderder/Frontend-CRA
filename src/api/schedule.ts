import axios from 'axios';
import API from './base';

export const getSchedule = (groupId) =>
    axios.get(`/api/schedule/teamschedule/${groupId}`);

export const postSchedule = ({ groupId, scheduleName, day, start, end }) =>
    API.post(`/auth/group/schedule/make`, {
        teamId: groupId,
        name: scheduleName,
        weekday: day,
        starttime: start,
        endtime: end,
    });
