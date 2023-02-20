import useSWR from 'swr';
import { getMyInfo } from '../../../api';
import { handleError } from '../../../utils';
import { useToken } from '../..';

const useMyInfo = () => {
    const { token } = useToken();
    const { data, mutate } = useSWR(
        token ? ['useMyInfo', token] : null,
        fetcher,
    );

    async function fetcher() {
        try {
            const { data } = await getMyInfo();
            return data;
        } catch (e) {
            handleError(e);
        }
    }

    return {
        user: data,
        mutate,
    };
};

export default useMyInfo;
