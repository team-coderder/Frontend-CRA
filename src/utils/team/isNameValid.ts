export const isNameValid = (name: string | undefined) => {
    let res = '';
    if (!name) {
        res = '이름을 입력하세요';
    } else if (/^\s.+/.test(name) || /.+\s$/.test(name)) {
        res = '이름 앞뒤로 공백이 있을 수 없습니다';
    } else if (name.length < 3 || name.length > 10) {
        res = '이름은 3글자 이상, 10글자 이하여야 합니다';
    }
    return res;
};
