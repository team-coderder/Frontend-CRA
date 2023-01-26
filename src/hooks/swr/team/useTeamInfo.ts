import useSWR from 'swr';
import { getTeamInfo, updateTeamInfo } from '../../../api';

const useTeamInfo = (teamId: number) => {
    const fetcher = async () => {
        const response = await getTeamInfo(teamId);
        return response.data;
    };

    const { data, error, mutate } = useSWR(['useTeamInfo', teamId], fetcher);

    const changeName = async (newName: string) => {
        try {
            const { data } = await updateTeamInfo(teamId, { name: newName });
            mutate();
            alert(`그룹 이름이 ${data.name} 으로 바뀌었습니다`);
        } catch (e) {
            alert(e);
        }
    };

    return {
        teamInfo: data,
        error,
        changeName,
    };
};

export default useTeamInfo;
