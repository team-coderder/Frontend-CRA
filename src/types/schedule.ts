import { GetTeamInfoResponse } from '.';

type Event = {
    id?: string;
    title: string;
    start: string | Date;
    end: string | Date;
};
type UserEvent = Event & {
    username: string;
    nickname: string;
};
type TeamEvent = Event & {
    teamId: number;
};
type EventSource = {
    id?: string;
    events: Event[];
    backgroundColor?: string;
    editable?: boolean;
    className?: string[];
};
type GetMembersScheduleResponse = {
    username: string;
    schedule: UserEvent[];
}[];
type useMyTeamsResponse = {
    teams: { teamId: number; name: string }[];
};
type TeamScheduleProps = {
    teamId: string | undefined;
    isLeader: boolean;
    teamInfo: GetTeamInfoResponse | undefined;
};

export type {
    Event,
    UserEvent,
    TeamEvent,
    EventSource,
    GetMembersScheduleResponse,
    useMyTeamsResponse,
    TeamScheduleProps,
};
