import API from './base';

type signUpForm = {
    username: string;
    password: string;
    nickname: string;
};

type loginForm = {
    username: string;
    password: string;
};

type getMyInfoResponse = {
    id: number;
    username: string;
    nickname: string;
};

export const sign_up = (signUpData: signUpForm) =>
    API.post('/join', signUpData);

export const login = (loginData: loginForm) => API.post('/login', loginData);

export const getMyInfo = (id: number) =>
    API.get<getMyInfoResponse>(`/api/member/mypage?memberId=${id}`);
