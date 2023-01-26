import API from './base';

type Invitation = {
    invitationId: number;
    fromTeamId: number;
    fromMemberId: number;
    toMemberId: number;
    createdAt: string;
};

type getMyInvitationsReturnType = {
    invitations: Array<Invitation>;
};

export const inviteUser = (teamId: number, memberIds: Array<number>) =>
    API.post('/api/invite', {
        teamId: teamId,
        memberIds: memberIds,
    });

export const getMyInvitations = () =>
    API.get<getMyInvitationsReturnType>('/api/invite');

export const acceptInvitation = (id: number) =>
    API.patch(`/api/invite/accept?invitationId=${id}`);

export const rejectInvitation = (id: number) =>
    API.patch(`/api/invite/refuse?invitationId=${id}`);
