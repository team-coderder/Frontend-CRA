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

interface eType {
    id?: string;
    start?: any;
    end?: any;
    text?: string;
}

const data = [
    {
        id: 'firstEvent',
        start: DayPilot.Date.today().addHours(12),
        end: DayPilot.Date.today().addHours(13),
        text: 'Event 1',
    },
    {
        id: 'SecondEvent',
        start: DayPilot.Date.today().addHours(18),
        end: DayPilot.Date.today().addHours(20),
        text: 'Event 2',
    },
];
const cols = [
    { name: 'Resource 1', id: 'R1', width: 20 },
    { name: 'Resource 2', id: 'R2', width: 5 },
    { name: 'Resource 3', id: 'R3', width: 5 },
    { name: 'Resource 4', id: 'R4' },
    { name: 'Resource 5', id: 'R5' },
    { name: 'Resource 6', id: 'R6' },
    { name: 'Resource 7', id: 'R7' },
];

const showData: eType[] = [];

const dummy = ['강정구', '진지연', '송민진', '임지우', '권영재'];

const TeamSchedule: React.FC = () => {
    const calendarRef: any = useRef();
    const todayDate = DayPilot.Date.today();
    const newmodal = DayPilot.Modal;
    const [name, setName] = useState('');
    const filteredData = data.filter((event) => {
        if (name && event.id.includes(name)) {
            console.log(`${name}s` + `Event!`, event.id);
            showData.push(event);
        }
        event.id.includes(name);
    });
    console.log('showData: ', showData);
    const state = {
        viewType: 'Resources',
        durationBarVisible: false,
        timeRangeSelectedHandling: 'Enabled',
        dayBeginsHour: 9,
        businessEndsHour: 24,
        heightSpec: 'BusinessHoursNoScroll',

        afterRender: () => {
            console.log(calendarRef);
        },
        onEventFilter: (args) => {
            if (
                args.e
                    .text()
                    .toLowerCase()
                    .indexOf(args.filter.toLowerCase()) === '권영재'
            ) {
                console.log(args);
                args.visible = false;
            }
        },
        onTimeRangeSelected: async (args: any) => {
            console.log('args : ', args);
            const dp = args.control;
            console.log('dp : ', dp);
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
                id: name + DayPilot.guid(),
                text: modal.result,
            });
            console.log(dp.events.list);
            console.log('filter test', filteredData);
            dp.events.list = showData;
            dp.events.update(showData);
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
            console.log(dp.events.list);
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
                    cellHeight={25}
                    cellDuration={30}
                    events={data}
                    columns={cols}
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
