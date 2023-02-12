import API from './base';
import type { Invitation } from '../types';

export const inviteUser = (teamId: number, memberIds: number[]) =>
    API.post(`/api/invite?teamId=${teamId}`, { memberIds: memberIds });

export const uninviteUser = (inviteId: number) =>
    API.patch(`/api/invite/cancel?invitationId=${inviteId}`);

export const getMyInvitations = () =>
    API.get<{ invitations: Invitation[] }>(`/api/invite`);

export const acceptInvitation = (inviteId: number) =>
    API.patch(`/api/invite/accept?invitationId=${inviteId}`);

export const rejectInvitation = (inviteId: number) =>
    API.patch(`/api/invite/refuse?invitationId=${inviteId}`);
