import useSWR from 'swr';
import { getTeamInfo } from '../../../api';

const useTeamInfo = (teamId: number) => {
    const fetcher = async () => {
        const response = await getTeamInfo(teamId);
        return response.data;
    };

    const { data, error } = useSWR(['useTeamInfo', teamId], fetcher);

    return {
        teamInfo: data,
        error,
    };
};

export default useTeamInfo;
