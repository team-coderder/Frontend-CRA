import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput, Nav } from '../components';
import {
    FormBox,
    FormContainer,
    Header,
    HelpBox,
    NavBox,
    ExplainBox,
} from '../styles/account/layout';
import { useMyInfo } from '../hooks';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useMyInfo();
    const [form, setForm] = useState({ username: '', password: '' });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.currentTarget.id]: event.currentTarget.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await login(form);
            navigate('/');
        } catch (e) {
            alert('로그인 정보를 다시 확인해주세요');
        }
    };

    return (
        <FormContainer>
            <Header>로그인</Header>
            <FormBox onSubmit={handleSubmit}>
                <TextInput
                    id="username"
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="id"
                    value={form.username}
                    onChange={onChange}
                />
                <TextInput
                    id="password"
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                />
                <Button type="submit" hoverBgColor="black">
                    로그인
                </Button>
                <ExplainBox>
                    <HelpBox>계정이 없다면?</HelpBox>
                    <NavBox>
                        <Nav url="/signup" color="white" underLine={true}>
                            회원가입
                        </Nav>
                    </NavBox>
                </ExplainBox>
            </FormBox>
        </FormContainer>
    );
};

export default Login;
