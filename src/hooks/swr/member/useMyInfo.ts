import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import storage from '../../../lib/storage';
import { User } from '../../../types';
import { login, getMyInfo } from '../../../api';
import { handleError } from '../../../utils';

const useMyInfo = () => {
    const navigate = useNavigate();
    const { data: token, mutate: mutateToken } = useSWR(
        'token',
        () => storage.getEntry('token') as string | null,
    );
    const { data: user, mutate: mutateUser } = useSWR(
        'user',
        () => storage.getEntry('user') as User | null,
    );

    const useMyInfoFetcher = async ([, id]) => {
        try {
            const { data } = await getMyInfo(id);
            storage.setEntry('user', data);
            mutateUser();
        } catch (e) {
            handleError(e);
        }
    };

    useSWR(user?.memberId ? ['useMyInfo', user?.memberId] : null, useMyInfoFetcher);

    const logIn = async (formData, navTo: string) => {
        try {
            const loginData = await login(formData);
            const userData = loginData.data;
            const tokenData = loginData.headers.authorization;

            storage.setEntry('user', userData);
            storage.setEntry('token', tokenData);
            mutateUser();
            mutateToken();

            navigate(navTo);
        } catch (e) {
            handleError(e);
        }
    };

    const logOut = () => {
        storage.removeEntry('user');
        storage.removeEntry('token');
        mutateUser();
        mutateToken();
    };

    return {
        token,
        user,
        login: logIn,
        logOut,
    };
};

export default useMyInfo;
