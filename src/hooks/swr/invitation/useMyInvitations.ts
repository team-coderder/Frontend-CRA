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
        async () => {
            const { data } = await getMyInvitations();
            return data;
        },
    );
    const { alert, confirm } = useDialog();

    const acceptInvite = async (id: number) => {
        try {
            if (await confirm(`Accept invitation?`)) {
                await acceptInvitation(id);
                mutate();
                await alert(`Invitation accepted!`);
            }
        } catch (e) {
            handleError(e);
        }
    };

    const rejectInvite = async (id: number) => {
        try {
            if (await confirm(`Reject invitation?`)) {
                await rejectInvitation(id);
                mutate();
                await alert(`Invitation rejected!`);
            }
        } catch (e) {
            handleError(e);
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
