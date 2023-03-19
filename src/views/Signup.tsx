import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Nav, TextInput } from '../components';
import {
    AuthComponent,
    FormContainer,
    AuthHeader,
    ExplainText,
} from '../styles/componentStyle';
import { sign_up } from '../api';
import { handleError } from '../utils';
import type { signUpForm } from '../types';
import { useDialog } from '../hooks';

const initialForm: signUpForm = { username: '', password: '', nickname: '' };

const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState(initialForm);
    const [confirmPassword, setConfirmPassword] = useState('');
    const { alert } = useDialog();

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
        try {
            const formIncomplete =
                !Object.values(form).every((x) => x !== '') ||
                hasError() ||
                notSameError();

            if (formIncomplete) {
                throw Error('Please try again.');
            }
            await sign_up(form);
            navigate('/login');
        } catch (e) {
            await handleError(e, alert);
        }
    };

    return (
        <AuthComponent>
            <AuthHeader>
                <h1>Sign Up</h1>
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
                    errorMessage="Needs to contain at least 6 characters and one special character"
                    error={hasError()}
                />
                <TextInput
                    width="100%"
                    type="password"
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={onChangeConfirmPassword}
                    errorMessage="Passwords do not match."
                    error={notSameError()}
                />
                <TextInput
                    id="nickname"
                    type="none"
                    width="100%"
                    placeholder="nickname"
                    value={form.nickname}
                    onChange={onChange}
                />
                <Button type="submit" inverse>
                    Sign Up
                </Button>
                <ExplainText>
                    Already have an account?&nbsp;&nbsp;
                    <Nav url="/login" underline="underline">
                        Sign In
                    </Nav>
                </ExplainText>
            </FormContainer>
        </AuthComponent>
    );
};

export default Signup;
