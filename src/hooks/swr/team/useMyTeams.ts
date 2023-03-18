import useSWR from 'swr';
import { getMyTeams, createTeam, deleteTeam, leaveTeam } from '../../../api';
import { useDialog, useToken } from '../../../hooks';
import { handleError, isNameValid } from '../../../utils';
import type { useMyTeamsResponse } from '../../../types';

const useMyTeams = () => {
    const { token } = useToken();
    const { data, error, isLoading, mutate } = useSWR<useMyTeamsResponse>(
        ['useMyTeams', token],
        fetcher,
    );
    const { alert } = useDialog();

    async function fetcher() {
        const response = await getMyTeams();
        return response.data;
    }

    const handleCreateTeam = async (groupName: string) => {
        try {
            const _groupName = groupName.trim();
            const res = isNameValid(_groupName);
            if (res !== '') {
                await alert(res);
                return;
            }

            const { data } = await createTeam({ name: _groupName });
            await alert(
                `You've created a new group ${data?.name}!`,
                `Go to [Edit Group Info] and invite new members.`,
            );
            mutate();
            return data;
        } catch (e) {
            handleError(e);
        }
    };

    const handleDeleteTeam = async (teamId: number) => {
        try {
            await deleteTeam(teamId);
            await alert(`Deleted!`);
            mutate();
        } catch (e) {
            handleError(e);
        }
    };

    const handleLeaveTeam = async (teamId: number) => {
        try {
            await leaveTeam(teamId);
            await alert(`You've left the group!`);
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
