import type { User, Invitation } from '.';

type Team = {
    teamId: number;
    name: string;
};
type TeamMember = User & {
    teamRole: string;
};
type GetTeamInfoResponse = Team & {
    myRole: string;
    teamMembers: TeamMember[];
    invitations: Invitation[];
};

export type { Team, TeamMember, GetTeamInfoResponse };
