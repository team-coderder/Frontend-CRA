import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { Button, Nav, Members } from '../components';
import { useTeamInfo } from '../hooks';
import {
    Main,
    Header,
    Field,
    AlignRight,
} from '../styles/globalStyle/PageLayout';
import { MainSchedule } from '../styles/schedule/schedule';

export const IconBox = styled.div`
    display: flex;
    min-width: 30px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const TeamSchedule: React.FC = () => {
    const params = useParams();
    const { teamInfo, error } = useTeamInfo(Number(params.teamId));
    const [name, setName] = useState('');

    return (
        <Main>
            <Header>
                <h1>그룹 이름 {params.teamId}</h1>
                <AlignRight style={{ marginTop: '15px' }}>
                    <Button width="11em" hoverBgColor="black" height="2.5rem">
                        <Nav
                            url={`/groupinfo/${params.teamId}`}
                            size="medium"
                            fill
                            center
                        >
                            그룹 정보 수정
                        </Nav>
                    </Button>
                    <Button width="11em" hoverBgColor="black" height="2.5rem">
                        그룹 스케줄 수정
                    </Button>
                </AlignRight>
            </Header>
            <MainSchedule name={name}>
            </MainSchedule>
            <Field>
                <h3>그룹원</h3>
                <Members members={teamInfo?.teamMembers} />
            </Field>
            <Field>
                <h3>보기모드</h3>
                <div style={{ marginRight: '10px' }}>
                    <Button
                        width="5rem"
                        height="2.5rem"
                        color="black"
                        backgroundColor="gray"
                    >
                        색깔로
                    </Button>
                </div>
                <Button
                    width="5rem"
                    height="2.4rem"
                    color="black"
                    backgroundColor="gray"
                >
                    진하게
                </Button>
            </Field>
        </Main>
    );
};

export default TeamSchedule;
