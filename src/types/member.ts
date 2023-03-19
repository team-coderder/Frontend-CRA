type User = {
    memberId: number;
    username: string;
    nickname: string;
};
type loginForm = {
    username: string;
    password: string;
};
type signUpForm = loginForm & {
    nickname: string;
};

export type { User, loginForm, signUpForm };
