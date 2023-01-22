export const getUserInfo = () => {
    try {
        const getUser = localStorage.getItem('userInfo');
        if (!getUser) {
            throw new Error('No User Information');
        } else {
            const userInfo = JSON.parse(getUser);
            return userInfo;
        }
    } catch (e) {
        alert('user check please');
    }
};
