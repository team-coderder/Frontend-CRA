import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../components';
import {
    Container,
    Header,
    AlignRight,
} from '../styles/globalStyle/PageLayout';
import { MainSchedule } from '../styles/schedule/schedule';
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-react';
import { getSchedule, postSchedule } from '../api';
import { getUserInfo } from '../hooks/getUserInfo';
import { schdule } from '../types';

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
    const todayDate = '2023-01-01';
    const [name, setName] = useState<string>('');
    const [data, setData] = useState<schdule | any>([]);
    const newmodal = DayPilot.Modal;
    const userInfo = getUserInfo();

    const getData = async () => {
        if (!userInfo) {
            alert('유저 정보를 다시 확인해주세요');
        } else {
            const resData = await getSchedule(userInfo.id).then(
                (result) => result.data,
            );
            console.log('getData test', resData);
            return resData;
        }
    };

    useEffect(() => {
        setName(userInfo.username);
        try {
            const loadData = async () => {
                await setData(getData());
            };
            loadData();
            console.log('API조회로 받은 스케줄', data);
        } catch (e) {
            console.log(e);
        }
    }, []);

    const dummydata = [];
    const state = {
        durationBarVisible: false,
        timeRangeSelectedHandling: 'Enabled',
        dayBeginsHour: 9,
        businessEndsHour: 24,
        heightSpec: 'BusinessHoursNoScroll',
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
            const event = {
                start: args.start,
                end: args.end,
                text: modal.result,
                id: name + DayPilot.guid(),
                resource: args.resource,
            };
            dp.events.add(event);
            // teamId: userId,
            // name: scheduleName,
            // weekday: day,
            // starTime: start,
            // finishTime: end,

            console.log('기존 라이브러리 이벤트 배열 값', dp.events.list);
            dp.events.list = await data;
            // console.log('조회한 스케줄', dp.evnets.list);
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
                        viewType="Weeks"
                        events={dummydata}
                        // columns={cols}
                        {...state}
                    />
                </MainSchedule>
            </Header>
            (스케줄)
        </Container>
    );
};

export default MySchedule;
