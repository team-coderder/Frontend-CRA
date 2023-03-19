import useSWR from 'swr';
import storage from '../../../lib/storage';
import { login as _login } from '../../../api';

const useToken = () => {
    const { data, isLoading, mutate } = useSWR(
        'token',
        () => storage.getEntry('token') as string | null,
    );

    const login = async (formData) => {
        const loginData = await _login(formData);
        const token = loginData.headers.authorization;
        if (token) {
            storage.setEntry('token', token);
            mutate(token, false);
        } else {
            throw Error('Sorry :(||Something went wrong. Please Try again.');
        }
    };

    const logout = () => {
        storage.removeEntry('token');
        mutate(null, false);
    };

    return {
        token: data,
        isLoading,
        login,
        logout,
    };
};

export default useToken;
