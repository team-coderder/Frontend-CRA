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
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onIdHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.currentTarget.value);
    };

    const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    };

    return (
        <FormContainer>
            <Header>로그인</Header>
            <FormBox>
                <TextInput
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="id"
                    value={id}
                    onChange={onIdHandler}
                />
                <TextInput
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="password"
                    value={password}
                    onChange={onPasswordHandler}
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
