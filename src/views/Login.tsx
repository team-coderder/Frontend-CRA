import React, { useState } from 'react';
import { Button, TextInput, Nav } from '../components';

import {
    FormBox,
    FormContainer,
    Header,
    HelpBox,
    NavBox,
    ExplainBox,
} from '../styles/account/layout';

const Login = () => {
    const [form, setForm] = useState({ id: '', password: '' });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.currentTarget.id]: event.currentTarget.value,
        });
    };

    return (
        <FormContainer>
            <Header>로그인</Header>
            <FormBox>
                <TextInput
                    id="id"
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="id"
                    value={form.id}
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
