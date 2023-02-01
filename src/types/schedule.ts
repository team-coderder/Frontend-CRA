export type Event = {
    id?: string;
    title?: string;
    start: string;
    end: string;
    resourceId?: string;
    nickname?: string;
};

export type EventSource = {
    id?: string;
    events: Event[];
    backgroundColor?: string;
    editable?: boolean;
};
