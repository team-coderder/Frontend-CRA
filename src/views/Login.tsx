import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput, Nav } from '../components';
import {
    AuthComponent,
    FormContainer,
    AuthHeader,
    ExplainText,
} from '../styles/componentStyle';
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
        <AuthComponent>
            <AuthHeader>
                <h1>Sign In</h1>
            </AuthHeader>
            <FormContainer onSubmit={handleSubmit}>
                <TextInput
                    id="username"
                    type="id"
                    width="100%"
                    placeholder="username"
                    value={form.username}
                    onChange={onChange}
                />
                <TextInput
                    id="password"
                    type="password"
                    width="100%"
                    placeholder="password"
                    value={form.password}
                    onChange={onChange}
                />
                <Button type="submit" inverse>
                    Sign In
                </Button>
                <ExplainText>
                    Not a member?&nbsp;&nbsp;
                    <Nav url="/signup" underline="underline">
                        Create New Account
                    </Nav>
                </ExplainText>
            </FormContainer>
        </AuthComponent>
    );
};

export default Login;
