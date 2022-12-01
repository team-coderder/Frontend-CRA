import React, { useState } from 'react';
import { Button, Nav, TextInput } from '../components';
import {
    FormBox,
    FormContainer,
    Header,
    NavBox,
    ExplainBox,
    HelpBox,
} from '../styles/account/layout';

type signUpForm = {
    username: string;
    password: string;
    nickname: string;
};

const initialForm: signUpForm = { username: '', password: '', nickname: '' };

const Signup = () => {
    const [form, setForm] = useState(initialForm);
    const [confirmPassword, setConfirmPassword] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.currentTarget.id]: event.currentTarget.value,
        });
    };

    const onChangeConfirmPassword = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setConfirmPassword(event.currentTarget.value);
    };

    const hasError = () => (form.password.length < 6 ? true : false);

    const notSameError = () =>
        form.password != confirmPassword ? true : false;

    return (
        <FormContainer>
            <Header>Sign up</Header>
            <FormBox>
                <TextInput
                    id="username"
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="id"
                    value={form.username}
                    onChange={onChange}
                    placeholder="아이디"
                />
                <TextInput
                    id="password"
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                    placeholder="비밀번호"
                    message="6자 이상, 1개 이상 문자, 1개 이상 특수문자를 사용하세요."
                    error={hasError()}
                />
                <TextInput
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="password"
                    value={confirmPassword}
                    onChange={onChangeConfirmPassword}
                    placeholder="비밀번호 재확인"
                    message="비밀번호가 일치하지 않습니다."
                    error={notSameError()}
                />
                <TextInput
                    id="nickname"
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="none"
                    value={form.nickname}
                    onChange={onChange}
                    placeholder="닉네임"
                />
                <Button type="submit" hoverBgColor="black">
                    회원가입
                </Button>
                <ExplainBox>
                    <HelpBox>이미 계정이 있다면</HelpBox>
                    <NavBox>
                        <Nav url="/login" color="white" underLine={true}>
                            로그인
                        </Nav>
                    </NavBox>
                </ExplainBox>
            </FormBox>
        </FormContainer>
    );
};

export default Signup;
