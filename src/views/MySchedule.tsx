import { useEffect, useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button } from '../components';
import {
    Container,
    Header,
    AlignRight,
} from '../styles/globalStyle/PageLayout';
// import { Schedule } from '../components';
import API from '../api/base';

type Schedule = {
    id: string;
    title: string;
    start: string;
    end: string;
    resourceId: string;
};

const MySchedule = () => {
    const calendarRef = useRef<FullCalendar>(null!);
    const [events, setEvents] = useState<Schedule[]>([]);
    const [sortedTimes, setSortedTimes] = useState<number[][]>([]);

    useEffect(() => {
        async function getMySchedule() {
            const { data } = await API.get<Schedule[]>(
                `/api/schedule/calendar?userId=${1}`,
            );
            console.log('getMySchedule', data);
            setEvents(data);
        }
        getMySchedule();
    }, []);

    function renderEventContent(eventInfo) {
        return (
            <>
                {/* <b>{eventInfo.timeText}</b> */}
                <i>{eventInfo.event.title}</i>
                {/* <i>{eventInfo.event.source.id}</i> */}
            </>
        );
    }

    return (
        <Container>
            <Header>
                <h1>내 스케쥴</h1>
                <AlignRight>
                    <Button width="15em" height="2.5em">
                        내 스케줄 수정
                    </Button>
                </AlignRight>
            </Header>
            <FullCalendar
                ref={calendarRef}
                plugins={[timeGridPlugin, interactionPlugin]}
                headerToolbar={false}
                initialDate="2023-01-02"
                editable={false}
                selectable={true}
                selectMirror={true}
                firstDay={1}
                weekends={true}
                // slotEventOverlap={false}
                allDaySlot={false}
                slotMinTime="06:00:00"
                dayHeaderFormat={{ weekday: 'short' }}
                // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                // eventSources={eventSource} //{eventSources}
                events={events} //{[...events, ...recommends]}
                eventsSet={handleEvents}
                eventContent={renderEventContent} // custom render function
                //
                select={handleDateSelect}
                eventClick={handleEventClick}
                // eventMouseEnter={function (mouseEnterInfo) { console.log('Hover', mouseEnterInfo.event.source?.id); }}
                //
                eventAdd={handleEventAdd}
                // eventChange={handleEventChange}
                eventRemove={handleEventRemove}
            />
        </Container>
    );

    function _convertToMinutes(dateTime: string) {
        const [date, time] = dateTime.split(/[T+]/);
        const [, , day] = date.split('-');
        const [hour, minute] = time.split(':');
        return Number(day) * 1440 + Number(hour) * 60 + Number(minute);
    }

    function _binSearchGTE(originalArr, target) {
        /*
         * target과 같거나 큰 [0]번째 아이템을 갖는 첫번째 아이템
         * 있다면 인덱스, 없다면 (가장 큰 값도 target보다 작다면) -1
         */
        const arr = [[Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER], ...originalArr];
        let start = 1;
        let end = arr.length;

        while (start <= end) {
            const mid = ~~((start + end) / 2);
            if (mid >= arr.length) {
                return -1;
            }
            if (arr[mid][0] >= target && arr[mid - 1][0] < target) {
                return mid - 1; // 0번째에 MIN을 넣었으니까
            } else if (target < arr[mid][0]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1;
    }

    function handleEvents(events) {
        console.log('handleEvents 호출됨!!!');
        const timeArr: Array<Array<number>> = [];
        events.forEach((event) => {
            timeArr.push([
                _convertToMinutes(event.startStr),
                _convertToMinutes(event.endStr),
            ]);
        });
        timeArr.sort((a, b) => a[0] - b[0]);
        setSortedTimes(timeArr);
    }

    function _isOverlap(startMin: number, endMin: number) {
        console.log(`_isOverlap sortedTimes`, sortedTimes);
        const idx = _binSearchGTE(sortedTimes, startMin);
        if (idx === -1) {
            if (sortedTimes[sortedTimes.length - 1][1] > startMin) return true;
        } else if (idx === 0) {
            if (sortedTimes[idx][0] < endMin) return true;
        } else {
            if (sortedTimes[idx][0] < endMin || sortedTimes[idx - 1][1] > startMin) return true;
        }
        return false;
    }

    function handleDateSelect(selectInfo: {
        // allday?: boolean;
        // end: Date; // Thu Jan 05 2023 11:00:00 GMT+0900 (한국 표준시)
        endStr: string;
        // jsEvent: MouseEvent | null;
        // start: Date;
        startStr: string;
        view: any;
    }) {
        // 하루가 넘어가거나
        // 범위를 넘어가거나
        // 겹치거나 (팀스케쥴은 OK)
        // 총 이벤트 개수가 n개를 넘어가거나
        // 하면 unselect

        const start = selectInfo.startStr; // 2023-01-04T09:30:00+09:00
        const end = selectInfo.endStr; // 2023-01-04T12:00:00+09:00
        const calendarApi = selectInfo.view.calendar;

        if (sortedTimes.length > 126 * 2) {
            alert('등록한 일정이 너무 많습니다');
            calendarApi.unselect();
            return;
        }

        if (
            start < '2023-01-02T06:00:00+09:00' ||
            end > '2023-01-09T00:00:00+09:00'
        ) {
            calendarApi.unselect();
            return;
        }

        if (start.split(/[T+]/)[0] !== end.split(/[T+]/)[0]) {
            alert('날짜를 넘어가는 스케쥴은 등록할 수 없습니다');
            calendarApi.unselect();
            return;
        }

        const startInMinutes = _convertToMinutes(start);
        const endInMinutes = _convertToMinutes(end);

        if (_isOverlap(startInMinutes, endInMinutes)) {
            alert('겹치는 스케쥴은 등록할 수 없습니다');
            calendarApi.unselect();
            return;
        }

        const title = prompt('일정을 입력하세요');

        calendarApi.unselect();

        if (title) {
            if (title.length > 20) {
                alert('일정 이름이 너무 깁니다 (20자 이하)');
                return;
            }
            calendarApi.addEvent({
                // id: 0,
                title,
                start: start,
                end: end,
            });
            console.log('생성 후', sortedTimes);
            // const _temp = [...sortedTimes, [startInMinutes, endInMinutes]];
            // _temp.sort((a, b) => a[0] - b[0]);
            // setSortedTimes(_temp);
        }
    }

    function handleEventAdd(addinfo) {
        console.log('addinfo', addinfo)
        try {
            const title = addinfo.event.title;
            const start = addinfo.event.startStr;
            const end = addinfo.event.endStr;
            const data = { // await addEvent({title, start, end})
                id: "EEWDFXGAG",
                title,
                start,
                end,
                resourceId: "유저 username",
                nickname: "유저 nickname",
            };
        } catch (e) {
            console.log(e);
        }
    }

    function handleEventClick({ event }) {
        console.log('clickInfo', event);
        if (
            confirm(
                `일정 '${event.title}' 를 지울까요?`,
            )
        ) {
            event.remove();
            console.log('삭제 후', sortedTimes);
            // sortedTimes.splice(sortedTimes.findIndex(event.startStr), 1);
            // sortedTimes.splice(sortedTimes.findIndex(event.endStr), 1);
            // setSortedTimes(sortedTimes);
        }
    }

    function handleEventRemove({ event }) {
        console.log('remove info', event);
    }
};

export default MySchedule;
