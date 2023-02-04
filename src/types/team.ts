import type { User } from '.';

export type Team = {
    teamId: number;
    name: string;
};

export type TeamMember = User & {
    teamRole: string;
};
