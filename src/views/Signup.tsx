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

const Signup = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [checkPw, setCheckPw] = useState('');
    const [nickname, setNickname] = useState('');

    const onIdHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.currentTarget.value);
    };
    const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
        console.log(password);
    };
    const onCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckPw(event.currentTarget.value);
        console.log(checkPw);
        if (checkPw !== password) return false;
    };
    const onNicknameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.currentTarget.value);
    };

    const hasError = () => (password.length < 6 ? true : false);

    const notSameError = () => (password != checkPw ? true : false);

    return (
        <FormContainer>
            <Header>Sign up</Header>
            <FormBox>
                <TextInput
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="id"
                    value={id}
                    onChange={onIdHandler}
                    placeholder="아이디"
                />
                <TextInput
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="password"
                    value={password}
                    onChange={onPasswordHandler}
                    placeholder="비밀번호"
                    message="6자 이상, 1개 이상 문자, 1개 이상 특수문자를 사용하세요."
                    error={hasError()}
                />
                <TextInput
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="password"
                    value={checkPw}
                    onChange={onCheckHandler}
                    placeholder="비밀번호 재확인"
                    message="비밀번호가 일치하지 않습니다."
                    error={notSameError()}
                />
                <TextInput
                    width="344px"
                    height="30px"
                    margin="30px"
                    type="none"
                    value={nickname}
                    onChange={onNicknameHandler}
                    placeholder="닉네임"
                />
                <Button type="submit" hoverBgColor="black">
                    로그인
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
