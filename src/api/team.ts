import API from './base';
import { User, Invitation } from '../types';

type CreateTeamResponse = {
    teamId: number;
    name: string;
};

type TeamMember = {
    memberId: number;
    username: string;
    nickname: string;
    teamRole: string;
};

type GetTeamInfoResponse = CreateTeamResponse & {
    teamMembers: Array<TeamMember>;
    invitations: Array<Invitation>;
};

type FindByUsernameResponse = {
    members: User[];
};

type GetMyTeamsResponse = {
    teams: Array<{ teamId: number; name: string }>;
};

export const createTeam = (teamInfo: { name: string }) =>
    API.post<CreateTeamResponse>('/api/team', teamInfo);

export const getTeamInfo = (teamId: number) =>
    API.get<GetTeamInfoResponse>(`/api/team?teamId=${teamId}`);

export const findByUsername = (userName: string) =>
    API.get<FindByUsernameResponse>(
        `/api/member/search/username?query=${userName}`,
    );

export const getMyTeams = () =>
    API.get<GetMyTeamsResponse>('/api/team/myteams?');
