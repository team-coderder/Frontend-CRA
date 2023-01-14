import useSWR from 'swr';
import { getMyTeams } from '../../../api';
import token from '../../../lib/token';

type useMyTeamsReturnType = {
    teams: { teamId: number; name: string }[];
};

const fetcher = async () => {
    const response = await getMyTeams();
    return response.data;
};

const useMyTeams = () => {
    const { data, error, isLoading, mutate } = useSWR<useMyTeamsReturnType>(
        ['useMyTeams', token.getAccessToken('token')],
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
