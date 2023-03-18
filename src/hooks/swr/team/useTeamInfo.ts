import useSWR from 'swr';
import {
    getTeamInfo,
    updateTeamInfo,
    removeUser,
    inviteUser,
    uninviteUser,
} from '../../../api';
import type { User } from '../../../types';
import { handleError, isNameValid } from '../../../utils';
import { useDialog } from '../..';

const useTeamInfo = (teamId: string | undefined) => {
    const { data, error, isLoading, mutate } = useSWR(
        teamId ? ['useTeamInfo', teamId] : null,
        fetcher,
    );
    const { confirm, alert } = useDialog();

    async function fetcher() {
        const { data } = await getTeamInfo(Number(teamId));
        data.teamMembers = data.teamMembers.sort(
            (a, b) => a.memberId - b.memberId,
        );
        data.invitations = data.invitations.sort(
            (a, b) => a.toMember.memberId - b.toMember.memberId,
        );
        return data;
    }

    const changeName = async (newName: string | undefined) => {
        try {
            const _newName = newName?.trim();
            const res = isNameValid(_newName);
            if (res !== '') {
                await alert(res);
                return;
            }

            const { data } = await updateTeamInfo(Number(teamId), {
                name: _newName as string,
            });
            mutate();
            await alert(`This group's name has been changed to ${data.name}.`);
        } catch (e) {
            handleError(e);
        }
    };

    const removeMember = async (memberId: number) => {
        try {
            if (data?.teamId) {
                if (await confirm(`Do you want to remove this member?`)) {
                    await removeUser(data.teamId, memberId);
                    mutate();
                }
            }
        } catch (e) {
            handleError(e);
        }
    };

    const inviteMember = async (member: User) => {
        try {
            if (data?.teamId && member.memberId) {
                await inviteUser(data.teamId, [member.memberId]);
                mutate();
            }
        } catch (e) {
            handleError(e);
        }
    };

    const uninviteMember = async (inviteId: number) => {
        try {
            if (await confirm(`Do you want to cancel this invitation?`)) {
                await uninviteUser(inviteId);
                mutate();
            }
        } catch (e) {
            handleError(e);
        }
    };

    return {
        teamInfo: data,
        error,
        isLoading,
        changeName,
        removeMember,
        inviteMember,
        uninviteMember,
    };
};

export default useTeamInfo;
