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
        try {
            const { data } = await getTeamInfo(Number(teamId));
            data.teamMembers = data.teamMembers.sort(
                (a, b) => a.memberId - b.memberId,
            );
            data.invitations = data.invitations.sort(
                (a, b) => a.toMember.memberId - b.toMember.memberId,
            );
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    const changeName = async (newName: string | undefined) => {
        try {
            const _newName = newName?.trim();
            if (data?.name === _newName) return;
            const res = isNameValid(_newName);
            if (res !== '') {
                throw Error('Check again!||' + res);
            }
            const { data: newData } = await updateTeamInfo(Number(teamId), {
                name: _newName as string,
            });
            mutate();
            await alert(`Renamed to '${newData.name}'`);
        } catch (e) {
            await handleError(e, alert);
        }
    };

    const removeMember = async (memberId: number) => {
        try {
            if (data?.teamId) {
                if (await confirm(`Do you want to remove this member?`)) {
                    await removeUser(data.teamId, memberId);
                    mutate();
                    await alert(`Removed!`);
                }
            } else {
                throw Error(
                    'Sorry :(||Something went wrong. Please Try again.',
                );
            }
        } catch (e) {
            await handleError(e, alert);
        }
    };

    const inviteMember = async (member: User) => {
        try {
            if (data?.teamId && member.memberId) {
                await inviteUser(data.teamId, [member.memberId]);
                mutate();
                await alert(`Invited!`);
            } else {
                throw Error(
                    'Sorry :(||Something went wrong. Please Try again.',
                );
            }
        } catch (e) {
            await handleError(e, alert);
        }
    };

    const uninviteMember = async (inviteId: number) => {
        try {
            if (await confirm(`Do you want to cancel this invitation?`)) {
                await uninviteUser(inviteId);
                mutate();
                await alert(`Canceled!`);
            }
        } catch (e) {
            await handleError(e, alert);
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
