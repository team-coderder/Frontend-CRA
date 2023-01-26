export const isNameValid = (name: string | undefined) => {
    if (!name) {
        alert('이름을 입력하세요');
    } else if (/^\s.+/.test(name) || /.+\s$/.test(name)) {
        alert('이름 앞뒤로 공백이 있을 수 없습니다');
    } else if (name.length < 3 || name.length > 10) {
        alert('이름은 3글자 이상, 10글자 이하여야 합니다');
    } else {
        return true;
    }
    return false;
};
