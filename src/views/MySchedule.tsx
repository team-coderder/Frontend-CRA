import React from 'react';
import { Button } from '../components';
import {
    Container,
    Header,
    AlignRight,
} from '../styles/globalStyle/PageLayout';

const MySchedule = () => (
    <Container>
        <Header>내 스케쥴</Header>
        <AlignRight>
            <Button width="15em" height="2.5em">
                내 스케줄 수정
            </Button>
        </AlignRight>
        (스케줄)
    </Container>
);

export default MySchedule;
