import API from './base';

export const inviteUser = (teamId: number, memberIds: Array<number>) =>
    API.post('/api/invite', {
        teamId: teamId,
        memberIds: memberIds,
    });
