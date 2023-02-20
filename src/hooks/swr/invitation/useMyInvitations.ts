import useSWR from 'swr';
import {
    getMyInvitations,
    acceptInvitation,
    rejectInvitation,
} from '../../../api';
import { useToken } from '../../../hooks';
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

    const acceptInvite = async (id: number) => {
        try {
            if (confirm(`초대를 수락할까요?`)) {
                await acceptInvitation(id);
                mutate();
                alert(`초대를 수락했습니다`);
            }
        } catch (e) {
            handleError(e);
        }
    };

    const rejectInvite = async (id: number) => {
        try {
            if (confirm(`초대를 거절할까요?`)) {
                await rejectInvitation(id);
                mutate();
                alert(`초대를 거절했습니다`);
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
