import React, { useState, useRef } from 'react';
import { Button } from '../components';
import {
    Container,
    Header,
    AlignRight,
} from '../styles/globalStyle/PageLayout';
import { MainSchedule } from '../styles/schedule/schedule';
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-react';
import { getSchedule, postSchedule } from '../api';

const cols = [
    { name: 'SUN', id: 'sun' },
    { name: 'MON', id: 'mon' },
    { name: 'TUE', id: 'tue' },
    { name: 'WED', id: 'wed' },
    { name: 'THU', id: 'thu' },
    { name: 'FRI', id: 'fri' },
    { name: 'SAT', id: 'sat' },
];

const MySchedule = () => {
    const calendarRef: any = useRef();
    const todayDate = DayPilot.Date.today();
    const [name, setName] = useState('');
    const newmodal = DayPilot.Modal;
    // const { data } = getSchedule();
    const data = [];
    const state = {
        viewType: 'Resources',
        durationBarVisible: false,
        timeRangeSelectedHandling: 'Enabled',
        dayBeginsHour: 9,
        businessEndsHour: 24,
        heightSpec: 'BusinessHoursNoScroll',
        onEventFilter: (args) => {
            if (
                args.e
                    .text()
                    .toLowerCase()
                    .indexOf(args.filter.toLowerCase()) === name
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
                resource: args.resource,
            });
            console.log(dp.events.list);
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
        <Container>
            <Header>
                <AlignRight>
                    <Button width="15em" height="2.5em">
                        내 스케줄 수정
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
            </Header>
            (스케줄)
        </Container>
    );
};

export default MySchedule;
