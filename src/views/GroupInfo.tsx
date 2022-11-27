import React from 'react';
import styled from '@emotion/styled';

import { TextInput, Button, Member } from '../components';
import {
    Container,
    Header,
    SubHeader,
    Main,
    Field,
} from '../styles/globalStyle/PageLayout';

const GroupInfo = () => (
    <Container>
        <Header>
            <h1>그룹 정보 수정</h1>
        </Header>
        <Main>
            <Field>
                <SubHeader>그룹 이름</SubHeader>
                <TextInput height="2rem" margin="0 20px 0 0" />
                <Button height="2.5rem" width="9em">
                    수정하기
                </Button>
            </Field>
            <Field>
                <SubHeader>멤버 관리</SubHeader>
                <TextInput height="2rem" placeholder="ID 검색" />
            </Field>
            <Field>
                <Member
                    backgroundColor="salmon"
                    height="2.5rem"
                    width="7em"
                    space={5}
                >
                    홍길동
                </Member>
                <Member
                    backgroundColor="indigo"
                    height="2.5rem"
                    width="7em"
                    space={5}
                >
                    아바타
                </Member>
            </Field>
            <Field>
                <SubHeader>그룹 삭제</SubHeader>
                <Button height="2.5rem" width="9em">
                    그룹 삭제
                </Button>
            </Field>
            <Field>
                <SubHeader>그룹 탈퇴</SubHeader>
                <Button height="2.5rem" width="9em">
                    그룹 탈퇴
                </Button>
            </Field>
        </Main>
    </Container>
);

export default GroupInfo;
