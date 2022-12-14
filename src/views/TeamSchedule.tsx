import React, { useEffect, useState, useRef } from 'react';
import { FiSettings } from 'react-icons/fi';
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-react';
import { Button, Member } from '../components';
import { generateColor } from '../hooks/ColorMethod';
import {
    Field,
    MarginRight,
    AlignRight,
} from '../styles/globalStyle/PageLayout';
import {
    MainSchedule,
    ScheduleContainer,
    Title,
    TitleBox,
    MemberBox,
} from '../styles/schedule/schedule';
import { IconBox } from '../styles/member/member';

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

const dummy = ['강정구', '진지연', '송민진', '임지우', '권영재'];

const TeamSchedule: React.FC = () => {
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
        <ScheduleContainer>
            <TitleBox>
                <Title>그룹 이름</Title>
                <IconBox>
                    <FiSettings
                        size="24"
                        style={{ marginLeft: '10px', cursor: 'pointer' }}
                    />
                </IconBox>
            </TitleBox>
            <AlignRight>
                <Button width="250px" hoverBgColor="black" height="2.5rem">
                    그룹 스케줄 수정
                </Button>
            </AlignRight>
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
            <Title>그룹원</Title>
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
            <Title>보기모드</Title>
            <Field>
                <MarginRight>
                    <Button
                        width="5rem"
                        height="2.5rem"
                        color="black"
                        backgroundColor="gray"
                    >
                        색깔로
                    </Button>
                </MarginRight>
                <Button
                    width="5rem"
                    height="2.4rem"
                    color="black"
                    backgroundColor="gray"
                >
                    진하게
                </Button>
            </Field>
        </ScheduleContainer>
    );
};

export default TeamSchedule;
