import type { Team, User } from '.';

export type Invitation = {
    invitationId: number;
    team: Team;
    fromMember: User;
    toMember: User;
    createdAt: string;
};
