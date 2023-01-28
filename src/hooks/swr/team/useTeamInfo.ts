import useSWR from 'swr';
import { AxiosError } from 'axios';
import { getTeamInfo, updateTeamInfo, inviteUser, uninviteUser } from '../../../api';
import type { User } from '../../../types';

const useTeamInfo = (teamId: number) => {
    const { data, error, mutate } = useSWR(['useTeamInfo', teamId], fetcher);

    async function fetcher() {
        const response = await getTeamInfo(teamId);
        return response.data;
    }


    const changeName = async (newName: string) => {
        try {
            const { data } = await updateTeamInfo(teamId, { name: newName });
            mutate();
            alert(`그룹 이름이 ${data.name} 으로 바뀌었습니다`);
        } catch (e) {
            alert(e);
        }
    };

    const inviteMember = async (member: User) => {
        try {
            if (data?.teamId && member.id) {
                await inviteUser(data.teamId, [member.id]);
                mutate();
            }
        } catch (err) {
            if (err instanceof AxiosError) {
                alert(err.response?.data?.message);
            } else {
                alert(err);
            }
        }
    };

    const uninviteMember = async (inviteId: number) => {
        try {
            await uninviteUser(inviteId);
            mutate();
        } catch (err) {
            if (err instanceof AxiosError) {
                alert(err.response?.data?.message);
            } else {
                alert(err);
            }
        }
    };

    return {
        teamInfo: data,
        error,
        changeName,
        inviteMember,
        uninviteMember,
    };
};

export default useTeamInfo;
