import useSWR from 'swr';
import { AxiosError } from 'axios';
import { getMyTeams, createTeam } from '../../../api';
import { useMyInfo } from '../../../hooks';

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
            const { data } = await createTeam({ name: groupName });
            mutate();
            return data;
        } catch (err) {
            if (err instanceof AxiosError) {
                alert(err.response?.data?.message);
            } else {
                alert(err);
            }
        }
    };

    return {
        myTeams: data?.teams,
        error,
        isLoading,
        mutate,
        handleCreateTeam,
    };
};

export default useMyTeams;
