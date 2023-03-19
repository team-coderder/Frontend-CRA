import useSWR from 'swr';
import { getMyTeams, createTeam, deleteTeam, leaveTeam } from '../../../api';
import { useDialog, useToken } from '../../../hooks';
import { handleError, isNameValid } from '../../../utils';

const useMyTeams = () => {
    const { token } = useToken();
    const { data, error, isLoading, mutate } = useSWR(
        ['useMyTeams', token],
        fetcher,
    );
    const { alert } = useDialog();

    async function fetcher() {
        try {
            const response = await getMyTeams();
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    const handleCreateTeam = async (groupName: string) => {
        try {
            const _groupName = groupName.trim();
            const res = isNameValid(_groupName);
            if (res !== '') {
                throw Error('Check again!||' + res);
            }

            const { data } = await createTeam({ name: _groupName });
            await alert(
                `You've created a new group '${data?.name}'!`,
                `Go to [Edit Group Info] and invite new members.`,
            );
            mutate();
            return data;
        } catch (e) {
            await handleError(e, alert);
        }
    };

    const handleDeleteTeam = async (teamId: number) => {
        try {
            await deleteTeam(teamId);
            await alert(`Deleted!`);
            mutate();
        } catch (e) {
            await handleError(e, alert);
        }
    };

    const handleLeaveTeam = async (teamId: number) => {
        try {
            await leaveTeam(teamId);
            await alert(`You've left the group!`);
            mutate();
        } catch (e) {
            await handleError(e, alert);
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
