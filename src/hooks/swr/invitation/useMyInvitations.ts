import useSWR from 'swr';
import {
    getMyInvitations,
    acceptInvitation,
    rejectInvitation,
} from '../../../api';
import { useDialog, useToken } from '../../../hooks';
import { handleError } from '../../../utils';

const useMyInvitations = () => {
    const { token } = useToken();
    const { data, error, mutate } = useSWR(
        ['useMyInvitations', token],
        fetcher,
    );
    const { alert, confirm } = useDialog();

    async function fetcher() {
        try {
            const { data } = await getMyInvitations();
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    const acceptInvite = async (id: number) => {
        try {
            if (await confirm(`Accept invitation?`)) {
                await acceptInvitation(id);
                mutate();
                await alert(`Accepted!`);
            }
        } catch (e) {
            await handleError(e, alert);
        }
    };

    const rejectInvite = async (id: number) => {
        try {
            if (await confirm(`Reject invitation?`)) {
                await rejectInvitation(id);
                mutate();
                await alert(`Rejected!`);
            }
        } catch (e) {
            await handleError(e, alert);
        }
    };

    return {
        myInvitations: data?.invitations,
        acceptInvite,
        rejectInvite,
        error,
        mutate,
    };
};

export default useMyInvitations;
