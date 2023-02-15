import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput, Nav } from '../components';
import {
    FormContainer,
    FormBox,
    Header,
    ExplainBox,
} from '../styles/componentStyle/auth';
import { useToken } from '../hooks';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useToken();
    const [form, setForm] = useState({ username: '', password: '' });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.currentTarget.id]: event.currentTarget.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await login(form);
        navigate('/');
    };

    return (
        <FormContainer>
            <Header>
                <h1>로그인</h1>
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
                />
                <Button type="submit" inverse>
                    로그인
                </Button>
                <ExplainBox>
                    계정이 없다면?&nbsp;&nbsp;
                    <Nav url="/signup" underline="underline">
                        회원가입
                    </Nav>
                </ExplainBox>
            </FormBox>
        </FormContainer>
    );
};

export default Login;
