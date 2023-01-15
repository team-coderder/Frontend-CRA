import useSWR from 'swr';
import {
    getMyInvitations,
    acceptInvitation,
    rejectInvitation,
} from '../../../api';
import storage from '../../../lib/storage';

const useMyInvitations = () => {
    const { data, error, mutate } = useSWR(
        ['useMyInvitations', storage.getEntry('token')],
        async () => {
            const { data } = await getMyInvitations();
            return data;
        },
    );

    const acceptInvite = async (id: number) => {
        try {
            await acceptInvitation(id);
            mutate();
            alert(`초대를 수락했습니다`);
        } catch (e) {
            alert(e);
        }
    };

    const rejectInvite = async (id: number) => {
        try {
            await rejectInvitation(id);
            mutate();
            alert(`초대를 거절했습니다`);
        } catch (e) {
            alert(e);
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
