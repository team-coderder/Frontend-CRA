import useSWR from 'swr';
import { getMyTeams } from '../../../api';
import { useMyInfo } from '../../../hooks';

type useMyTeamsReturnType = {
    teams: { teamId: number; name: string }[];
};

const useMyTeams = () => {
    const { token } = useMyInfo();

    const fetcher = async () => {
        const response = await getMyTeams();
        return response.data;
    };

    const { data, error, isLoading, mutate } = useSWR<useMyTeamsReturnType>(
        ['useMyTeams', token],
        fetcher,
    );

    return {
        myTeams: data?.teams,
        error,
        isLoading,
        mutate,
    };
};

export default useMyTeams;
