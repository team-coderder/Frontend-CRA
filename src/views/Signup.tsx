import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Nav, TextInput } from '../components';
import {
    FormBox,
    FormContainer,
    Header,
    NavBox,
    ExplainBox,
    HelpBox,
} from '../styles/account/layout';
import { sign_up } from '../api';
import { handleError } from '../utils';

type signUpForm = {
    username: string;
    password: string;
    nickname: string;
};

const initialForm: signUpForm = { username: '', password: '', nickname: '' };

const Signup = () => {
    const navigate = useNavigate();
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

    const hasError = () =>
        form.password.length >= 6 &&
            form.password.search(/[a-zA-z]/) > -1 &&
            form.password.search(/[~!@#$%^&*_\-\+=`|\(){}[\]:;"'<>,./]/) > -1
            ? false
            : true;

    const notSameError = () => form.password !== confirmPassword;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formIncomplete =
            !Object.values(form).every((x) => x !== '') ||
            hasError() ||
            notSameError();

        if (formIncomplete) {
            alert('입력 정보를 다시 확인해주세요.');
        } else {
            try {
                await sign_up(form); // {"id":29,"username":"coderder100","nickname":"check-filter"}
                navigate('/login');
            } catch (e) {
                handleError(e);
            }
        }
    };

    return (
        <FormContainer>
            <Header>Sign up</Header>
            <FormBox onSubmit={handleSubmit}>
                <TextInput
                    id="username"
                    width="100%"
                    height="30px"
                    margin="30px"
                    type="id"
                    value={form.username}
                    onChange={onChange}
                    placeholder="아이디"
                />
                <TextInput
                    id="password"
                    width="100%"
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
                    width="100%"
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
                    width="100%"
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
                    이미 계정이 있다면?&nbsp;&nbsp;
                    <Nav url="/login" color="white" underLine={true}>
                        로그인
                    </Nav>
                </ExplainBox>
            </FormBox>
        </FormContainer>
    );
};

export default Signup;
