import API from './base';

type CreateTeamResponse = {
    teamId: number;
    name: string;
};

export const createTeam = (teamName: string) =>
    API.post<CreateTeamResponse>('/api/team', teamName);
