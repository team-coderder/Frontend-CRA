import useSWR from 'swr';
import { getMyTeams, createTeam, deleteTeam, leaveTeam } from '../../../api';
import { useMyInfo } from '../../../hooks';
import { handleError, isNameValid } from '../../../utils';

type useMyTeamsReturnType = {
    teams: { teamId: number; name: string }[];
};

const useMyTeams = () => {
    const { token } = useMyInfo();
    const { data, error, isLoading, mutate } = useSWR<useMyTeamsReturnType>(
        ['useMyTeams', token],
        fetcher,
    );

    async function fetcher() {
        const response = await getMyTeams();
        return response.data;
    }

    const handleCreateTeam = async (groupName: string) => {
        try {
            if (isNameValid(groupName)) {
                const { data } = await createTeam({ name: groupName });
                alert(
                    `${data?.name} 팀을 만들었습니다.\n[그룹 정보 수정]에서 멤버를 추가해보세요!`,
                );
                mutate();
                return data;
            }
        } catch (e) {
            handleError(e);
        }
    };

    const handleDeleteTeam = async (teamId: number) => {
        try {
            await deleteTeam(teamId);
            alert(`그룹이 삭제되었습니다`);
            mutate();
        } catch (e) {
            handleError(e);
        }
    };

    const handleLeaveTeam = async (teamId: number) => {
        try {
            await leaveTeam(teamId);
            alert(`그룹을 탈퇴했습니다`);
            mutate();
        } catch (e) {
            handleError(e);
        }
    };

    return {
        myTeams: data?.teams,
        error,
        isLoading,
        mutate,
        handleCreateTeam,
        handleDeleteTeam,
        handleLeaveTeam,
    };
};

export default useMyTeams;
