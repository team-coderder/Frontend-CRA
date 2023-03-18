import type { TeamMember, Invitation, User, UserEvent, EventSource } from '.';
import type {
    CalendarApi,
    EventApi,
    DateSelectArg,
    EventClickArg,
    EventHoveringArg,
    EventAddArg,
    EventChangeArg,
    EventRemoveArg,
    EventContentArg,
} from '@fullcalendar/core';

/* Common */
type ButtonProps = {
    type?: 'submit';
    width?: string;
    height?: string;
    inverse?: boolean;
    fontSize?: string;
    fontWeight?: 'bold' | 'normal';
    color?: string;
    backgroundColor?: string;
    children: React.ReactNode;
    onClick?: () => void;
};
type MemberProps = {
    width?: string;
    height?: string;
    fontSize?: string;
    backgroundColor?: string;
    deletable?: boolean;
    children: React.ReactNode;
    memberId?: number;
    onDelete?: (id: number) => void;
};
type ModalProps = {
    icon: React.ReactNode;
    children?: React.ReactNode;
};
type LinkProps = {
    fontSize?: string;
    fontWeight?: 'bold' | 'normal';
    color?: string;
    underline?: 'underline';
    spread?: boolean;
    children: React.ReactNode;
    url: string;
};
type TextInputProps = {
    id?: string;
    type?: 'none' | 'id' | 'password';
    width?: string;
    height?: string;
    margin?: string;
    error?: boolean;
    placeholder?: string;
    value?: string | number;
    errorMessage?: string;
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/* Dialog */
type DialogType = 'alert' | 'confirm' | 'prompt' | 'show';
type DialogStore = {
    title: string;
    description: string;
    type: string;
    revealed: boolean;
    responseHandler: (value: string | boolean | PromiseLike<boolean>) => void;
    child?: React.ReactNode;
};
/* Members */
type MembersProp = {
    myUsername?: string;
    members: TeamMember[] | Invitation[] | undefined;
    handleDeleteMember?: (id: number) => Promise<void>;
};
type SearchIDProps = {
    handleAddMember: (member: User) => Promise<void>;
};
/* Schedule */
type ScheduleProps = {
    selectable?: boolean;
    events?: UserEvent[] | undefined;
    eventSources?: EventSource[] | undefined;
    handleEvents?: (events: EventApi[]) => void;
    handleDateSelect?: (selectInfo: DateSelectArg) => void;
    handleEventClick?: (clickInfo: EventClickArg) => void;
    handleMouseEnter?: (enterInfo: EventHoveringArg) => void;
    handleMouseLeave?: (leaveInfo: EventHoveringArg) => void;
    handleEventAdd?: (addInfo: EventAddArg) => void;
    handleEventChange?: (changeInfo: EventChangeArg) => void;
    handleEventRemove?: (removeInfo: EventRemoveArg) => void;
};

export type {
    ButtonProps,
    MemberProps,
    ModalProps,
    LinkProps,
    TextInputProps,
    DialogType,
    DialogStore,
    MembersProp,
    SearchIDProps,
    ScheduleProps,
    CalendarApi,
    EventApi,
    DateSelectArg,
    EventClickArg,
    EventHoveringArg,
    EventAddArg,
    EventRemoveArg,
    EventContentArg,
};
