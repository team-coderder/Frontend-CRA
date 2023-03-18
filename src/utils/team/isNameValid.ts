export const isNameValid = (name: string | undefined) => {
    let res = '';
    if (!name || name.length < 3 || name.length > 10) {
        res = 'Name needs to be 3 to 10 characters long';
    }
    return res;
};
