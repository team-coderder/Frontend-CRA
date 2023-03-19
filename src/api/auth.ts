import API from './base';
import type { User, loginForm, signUpForm } from '../types';

export const sign_up = (signUpData: signUpForm) =>
    API.post<User>(`/join`, signUpData);

export const login = (loginData: loginForm) =>
    API.post<User>(`/login`, loginData);

export const getMyInfo = () => API.get<User>(`/api/member/mypage`);

export const findByUsername = (userName: string) =>
    API.get<{ members: User[] }>(
        `/api/member/search/username?query=${userName}`,
    );
