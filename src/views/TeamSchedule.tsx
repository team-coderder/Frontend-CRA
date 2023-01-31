import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-react';
import { Button, Member } from '../components';
import { generateColor } from '../hooks/ColorMethod';
import {
    Container,
    Header,
    Field,
    AlignRight,
} from '../styles/globalStyle/PageLayout';
import { MainSchedule, MemberBox } from '../styles/schedule/schedule';
import { Schedule } from '../components';

const data = [
    {
        id: 1,
        start: DayPilot.Date.today().addHours(12),
        end: DayPilot.Date.today().addHours(13),
        text: 'Event 1',
    },
    {
        id: 2,
        start: DayPilot.Date.today().addHours(18),
        end: DayPilot.Date.today().addHours(20),
        text: 'Event 2',
    },
];

export const IconBox = styled.div`
    display: flex;
    min-width: 30px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const dummy = ['강정구', '진지연', '송민진', '임지우', '권영재', '김철수'];

const TeamSchedule: React.FC = () => {
    const params = useParams();


    return (
        <Container>
            <Header>
                <h1>그룹 이름 {params.teamId}</h1>
                <AlignRight style={{ marginTop: '15px' }}>
                    <Button width="11em" hoverBgColor="black" height="2.5rem">
                        그룹 정보 수정
                    </Button>
                    <Button width="11em" hoverBgColor="black" height="2.5rem">
                        그룹 스케줄 수정
                    </Button>
                </AlignRight>
            </Header>
            <Schedule />
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
        </Container>
    );
};

export default TeamSchedule;
