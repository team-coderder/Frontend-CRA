import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Nav, TextInput } from '../components';
import {
    FormContainer,
    FormBox,
    Header,
    ExplainBox,
} from '../styles/componentStyle/auth';
import { sign_up } from '../api';
import { handleError } from '../utils';
import type { signUpForm } from '../types';

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
            <Header>
                <h1>회원가입</h1>
            </Header>
            <FormBox onSubmit={handleSubmit}>
                <TextInput
                    id="username"
                    type="id"
                    width="100%"
                    placeholder="아이디"
                    value={form.username}
                    onChange={onChange}
                />
                <TextInput
                    id="password"
                    type="password"
                    width="100%"
                    placeholder="비밀번호"
                    value={form.password}
                    onChange={onChange}
                    errorMessage="6자 이상, 1개 이상 특수문자를 사용하세요"
                    error={hasError()}
                />
                <TextInput
                    width="100%"
                    type="password"
                    placeholder="비밀번호 재확인"
                    value={confirmPassword}
                    onChange={onChangeConfirmPassword}
                    errorMessage="비밀번호가 일치하지 않습니다."
                    error={notSameError()}
                />
                <TextInput
                    id="nickname"
                    type="none"
                    width="100%"
                    placeholder="닉네임"
                    value={form.nickname}
                    onChange={onChange}
                />
                <Button type="submit" inverse>
                    회원가입
                </Button>
                <ExplainBox>
                    이미 계정이 있다면?&nbsp;&nbsp;
                    <Nav url="/login" underline="underline">
                        로그인
                    </Nav>
                </ExplainBox>
            </FormBox>
        </FormContainer>
    );
};

export default Signup;
