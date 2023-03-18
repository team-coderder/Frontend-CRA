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

const useTeamInfo = (teamId: string | undefined) => {
    const { data, error, isLoading, mutate } = useSWR(
        teamId ? ['useTeamInfo', teamId] : null,
        fetcher,
    );

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
            if (isNameValid(newName)) {
                const { data } = await updateTeamInfo(Number(teamId), {
                    name: newName as string,
                });
                mutate();
                alert(`그룹 이름이 ${data.name} 으로 바뀌었습니다`);
            }
        } catch (e) {
            handleError(e);
        }
    };

    const removeMember = async (memberId: number) => {
        try {
            if (data?.teamId) {
                if (confirm(`멤버를 탈퇴시킬까요?`)) {
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
            if (confirm(`초대를 취소할까요?`)) {
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
