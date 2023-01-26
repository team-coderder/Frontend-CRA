import useSWR from 'swr';
import storage from '../../../lib/storage';
import { User } from '../../../types';
import { login, getMyInfo } from '../../../api';

const useMyInfo = () => {
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
            alert(e);
        }
    };

    useSWR(user?.id ? ['useMyInfo', user?.id] : null, useMyInfoFetcher);

    const logIn = async (formData) => {
        try {
            const loginData = await login(formData);
            const userData = loginData.data;
            const tokenData = loginData.headers.authorization;

            storage.setEntry('user', userData);
            storage.setEntry('token', tokenData);
            mutateUser();
            mutateToken();
        } catch (e) {
            alert(e);
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
