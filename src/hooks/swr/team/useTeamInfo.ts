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

const useTeamInfo = (teamId: number) => {
    const { data, error, isLoading, mutate } = useSWR(['useTeamInfo', teamId], fetcher);

    async function fetcher() {
        const response = await getTeamInfo(teamId);
        return response.data;
    }

    const changeName = async (newName: string | undefined) => {
        try {
            if (isNameValid(newName)) {
                const { data } = await updateTeamInfo(teamId, {
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
                await removeUser(teamId, memberId);
                mutate();
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
            await uninviteUser(inviteId);
            mutate();
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
