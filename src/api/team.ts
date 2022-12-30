import API from './base';
import { User } from '../types';

type CreateTeamResponse = {
    teamId: number;
    name: string;
};

type FindByUsernameResponse = {
    members: User[];
};

export const createTeam = (teamInfo: { name: string }) =>
    API.post<CreateTeamResponse>('/api/team', teamInfo);

export const findByUsername = (userName: string) =>
    API.get<FindByUsernameResponse>(
        `/api/member/search/username?query=${userName}`,
    );
