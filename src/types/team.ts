export type User = {
    id: number;
    username: string;
    nickname: string;
};

export type TeamMember = {
    memberId: number;
    username: string;
    nickname: string;
    teamRole: string;
};

export type Invitation = {
    invitationId: number;
    fromTeamId: number;
    fromMemberId: number;
    toMemberId: number;
    createdAt: string;
};
