import API from './base';
import type { Team, TeamMember, Invitation } from '../types';

type GetTeamInfoResponse = Team & {
    myRole: string;
    teamMembers: TeamMember[];
    invitations: Invitation[];
};

export const createTeam = (teamInfo: { name: string }) =>
    API.post<Team>(`/api/team`, teamInfo);

export const getTeamInfo = (teamId: number) =>
    API.get<GetTeamInfoResponse>(`/api/team?teamId=${teamId}`);

export const updateTeamInfo = (teamId: number, newName: { name: string }) =>
    API.patch<Team>(`/api/team?teamId=${teamId}`, newName);

export const deleteTeam = (teamId: number) =>
    API.delete(`/api/team?teamId=${teamId}`);

export const removeUser = (teamId: number, memberId: number) =>
    API.delete(`/api/team/members?teamId=${teamId}&memberId=${memberId}`);

export const getMyTeams = () =>
    API.get<{ teams: Team[] }>(`/api/team/myteams`);

export const leaveTeam = (teamId: number) =>
    API.delete(`/api/team/myteam?teamId=${teamId}`);
