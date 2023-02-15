import useSWR from 'swr';
import storage from '../../../lib/storage';
import { login as _login } from '../../../api';
import { handleError } from '../../../utils';

const useToken = () => {
    const { data, isLoading, mutate } = useSWR(
        'token',
        () => storage.getEntry('token') as string | null,
    );

    const login = async (formData) => {
        try {
            const loginData = await _login(formData);
            const token = loginData.headers.authorization;
            if (token) {
                storage.setEntry('token', token);
                mutate(token, false);
            }
        } catch (e) {
            handleError(e);
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
