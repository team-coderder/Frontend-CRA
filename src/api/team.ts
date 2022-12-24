import API from './base';

type CreateTeamResponse = {
    teamId: number;
    name: string;
};

export const createTeam = (teamInfo: { name: string }) =>
    API.post<CreateTeamResponse>('/api/team', teamInfo);
