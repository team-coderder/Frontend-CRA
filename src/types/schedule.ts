export type Event = {
    id?: string;
    title: string;
    start: string | Date;
    end: string | Date;
};

export type UserEvent = Event & {
    username: string;
    nickname: string;
};

export type TeamEvent = Event & {
    teamId: number;
};

export type EventSource = {
    id?: string;
    events: Event[];
    backgroundColor?: string;
    editable?: boolean;
    className?: string[];
};
