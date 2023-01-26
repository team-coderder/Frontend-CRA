import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-react';
import { Button, Member } from '../components';
import { Button, Nav, Member } from '../components';
import { generateColor } from '../hooks/ColorMethod';
import {
    Container,
    Header,
    Field,
    AlignRight,
} from '../styles/globalStyle/PageLayout';
import { MainSchedule, MemberBox } from '../styles/schedule/schedule';

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
    const calendarRef: any = useRef();
    const todayDate = DayPilot.Date.today();
    const newmodal = DayPilot.Modal;
    const [name, setName] = useState('');
    // const init = (args) => (args.control.events.list = data);
    // useEffect(() => {
    //     calendarRef.control.events.list = data;
    // }, []);
    const state = {
        viewType: 'Week',
        durationBarVisible: false,
        timeRangeSelectedHandling: 'Enabled',
        dayBeginsHour: 9,
        businessEndsHour: 24,
        heightSpec: 'BusinessHoursNoScroll',
        onBeforeHeaderRender: (args: any) => {
            args.header.html = args.heaer.start.toString('yyyy/M/d');
        },
        onTimeRangeSelected: async (args: any) => {
            console.log('args : ', args);
            const dp = args.control;
            console.log('dp : ', dp);
            // dp.update({ startDate, data });
            const modal = await newmodal.prompt(
                '생성할 스케줄 이름 : ',
                'Schedule 1',
                { theme: 'modal_rounded' },
            );
            dp.clearSelection();
            if (!modal.result) {
                return;
            }
            dp.events.add({
                start: args.start,
                end: args.end,
                id: DayPilot.guid(),
                text: modal.result,
            });
            console.log(args.start);
            console.log(args.end);
        },
        eventDeleteHandling: 'Update',
        onEventClick: async (args: any) => {
            const dp = args.control;
            const modal = await DayPilot.Modal.prompt(
                '변경할 스케줄 이름 : ',
                args.e.text(),
                { theme: 'modal_rounded' },
            );
            if (!modal.result) {
                return;
            }
            const e = args.e;
            e.data.text = modal.result;
            dp.events.update(e);
        },
    };

    return (
        <Container>
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
                <DayPilotCalendar
                    days={7}
                    startDate={todayDate}
                    ref={calendarRef}
                    cellHeight={30}
                    cellDuration={30}
                    {...state}
                />
            </MainSchedule>
            <Field>
                <h3>그룹원</h3>
                <MemberBox>
                    {dummy.map((x, idx) => (
                        <Member
                            key={idx}
                            space={5}
                            backgroundColor={generateColor(x)}
                            color="white"
                            disable={false}
                            onClick={() => setName(x)}
                        >
                            {x}
                        </Member>
                    ))}
                </MemberBox>
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
        </Container>
    );
};

export default TeamSchedule;
