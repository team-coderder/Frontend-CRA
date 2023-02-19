import API from './base';
import type { User } from '../types';

type loginForm = {
    username: string;
    password: string;
};

type signUpForm = loginForm & {
    nickname: string;
};

export const sign_up = (signUpData: signUpForm) =>
    API.post<User>(`/join`, signUpData);

export const login = (loginData: loginForm) =>
    API.post<User>(`/login`, loginData);

export const getMyInfo = () =>
    API.get<User>(`/api/member/mypage`);

export const findByUsername = (userName: string) =>
    API.get<{ members: User[] }>(
        `/api/member/search/username?query=${userName}`,
    );
