export type User = {
    memberId: number;
    username: string;
    nickname: string;
};

export type TeamMember = User & {
    teamRole: string;
};

export type Team = {
    teamId: number;
    name: string;
};

export type Invitation = {
    invitationId: number;
    team: Team;
    fromMember: User;
    toMember: User;
    createdAt: string;
};
