import API from './base';
import type { Event, UserEvent, GetMembersScheduleResponse } from '../types';

export const getMySchedule = () =>
    API.get<{ schedule: UserEvent[] }>(`/api/schedule/myschedule`);

export const createMySchedule = (newEvent: Event) =>
    API.post(`/api/schedule/myschedule`, newEvent);

export const deleteMySchedule = (eventId: string) =>
    API.delete(`/api/schedule/myschedule?scheduleId=${eventId}`);

export const getMembersSchedule = (teamId: number) =>
    API.get<GetMembersScheduleResponse>(
        `/api/schedule/myteam?teamId=${teamId}`,
    );

export const getTeamSchedule = (teamId: number) =>
    API.get<{ schedule: Event[] }>(
        `/api/schedule/teamschedule?teamId=${teamId}`,
    );

export const createTeamSchedule = (teamId: number, newEvent: Event) =>
    API.post(`/api/schedule/teamschedule?teamId=${teamId}`, newEvent);

export const deleteTeamSchedule = (eventId: string) =>
    API.delete(`/api/schedule/teamschedule?scheduleId=${eventId}`);
