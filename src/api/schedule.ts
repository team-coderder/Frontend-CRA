import API from './base';
import { Event, UserEvent, TeamEvent } from '../types';

type GetMembersScheduleType = Array<{
    username: string;
    schedule: UserEvent[];
}>;

export const getMySchedule = () =>
    API.get<Required<UserEvent>[]>(`/api/schedule/calendar`);

export const createMySchedule = (newEvent: Event) =>
    API.post(`/api/schedule/myschedule`, newEvent);

export const deleteMySchedule = (eventId: string) =>
    API.delete(`/api/schedule/myschedule?eventId=${eventId}`);

export const getMembersSchedule = (teamId: number) =>
    API.get<GetMembersScheduleType>(`/api/schedule/myteam?teamId=${teamId}`);

export const getTeamSchedule = (teamId: number) =>
    API.get<TeamEvent[]>(`/api/schedule/teamschedule?teamId=${teamId}`);

export const createTeamSchedule = (teamId: number, newEvent: Event) =>
    API.post(`/api/schedule/teamschedule?teamId=${teamId}`, newEvent);

export const deleteTeamSchedule = (eventId: string) =>
    API.delete(`/api/schedule/teamschedule?eventId=${eventId}`);

export const getRecommendation = (teamId: number, span: number) =>
    API.get<Omit<Event, 'title'>>(
        `/api/schedule/recommendations?teamId=${teamId}&span=${span}`,
    );
