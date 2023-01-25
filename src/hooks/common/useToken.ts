import storage from '../../lib/storage';

const useToken = (): string => {
    const token = storage.getEntry('token') as string | null;
    return token ?? '';
};

export default useToken;
