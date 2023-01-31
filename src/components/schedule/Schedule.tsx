import React, { useRef, useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './schedule.css';
import API from '../../api/base';
import { generateColor } from '../../hooks/ColorMethod';
// import koLocale from '@fullcalendar/core/locales/ko';

type Event = {
    title: string;
    start: string;
    end: string;
    userId?: string;
};

type Schedule = {
    username: string;
    schedule: Event[];
};

type EventSource = {
    events: Event[];
    color: string;
    textColor: string;
    editable: boolean;
};

type Recommendation = {
    start: string;
    end: string;
    display: string;
};

const Schedule = () => {
    const calendarRef = useRef<FullCalendar>(null!);
    const [schedule, setSchedule] = useState<Schedule[]>();
    const [eventSource, setEventSource] = useState<EventSource[]>();
    const [events, setEvents] = useState<Recommendation[]>();

    useEffect(() => {
        async function getTeamSchedule() {
            const { data } = await API.get<Schedule[]>(
                `/api/schedule/myteam?teamId=${1}`,
            );
            console.log('getTeamSchedule', data);
            setSchedule(data);

            const eventSource = data.map(({ username, schedule }) => {
                return {
                    id: username,
                    events: schedule,
                    color: generateColor(username),
                    textColor: 'white',
                    editable: false,
                };
            });
            setEventSource(eventSource);
        }
        getTeamSchedule();

        async function getRecommendation() {
            const { data } = await API.get<{ start: string; end: string; }[]>(
                `/api/schedule/recommendations?teamId=${1}&span=${120}`,
            );
            console.log('getRecommendation', data);

            const events = data.map(({ start, end }) => {
                return {
                    start: start,
                    end: end,
                    display: 'background',
                };
            })
            setEvents(events);
        }
        getRecommendation();
    }, []);

    useEffect(() => {
        console.log('스케쥴 = ', schedule);
        console.log('이벤트소스 = ', eventSource);
    }, [schedule, eventSource]);

    /*
    const eventSources = [
        // your event source
        {
            events: [ // put the array in the `events` property
                {
                    title: 'event1',
                    start: '2014-01-01'
                },
                {
                    title: 'event2',
                    start: '2014-01-03',
                    end: '2014-01-04'
                },
                {
                    title: 'event3',
                    start: '2014-01-01T12:30:00',
                    allDay: false // will make the time show
                }
            ],
            color: 'black',     // an option!
            textColor: 'yellow', // an option!
            editable: false,
        },
        {
            events: [ // put the array in the `events` property
                {
                    title: 'event1',
                    start: '2014-01-01'
                },
                {
                    title: 'event2',
                    start: '2014-01-03',
                    end: '2014-01-04'
                },
                {
                    title: 'event3',
                    start: '2014-01-01T12:30:00',
                    allDay: false // will make the time show
                }
            ],
            color: 'blue',     // an option!
            textColor: 'grey', // an option!
            editable: false,
        }

        // any other event sources...
    ];
    */

    // const handleApi = () => {
    //     console.log('handleAPI');
    //     if (calendarRef.current) {
    //         const calendarAPI = calendarRef.current.getApi();
    //         console.log('calendarAPI', calendarAPI)
    //         const eventSource = calendarAPI.getEventSources();
    //         console.log('calendarAPI.getEventSources', eventSource[0]);
    //         const source = calendarAPI.getEventSourceById('coderder815');
    //         console.log('source', source?.refetch);
    //     }
    // }

    const handleDateSelect = (selectInfo: {
        // allday?: boolean;
        // end: Date; // Thu Jan 05 2023 11:00:00 GMT+0900 (한국 표준시)
        endStr: string;
        // jsEvent: MouseEvent | null;
        // start: Date;
        startStr: string;
        view: any;
    }) => {


        console.log('셀렉트', selectInfo);

        const title = prompt('Please enter a new title for your event');
        const calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                // id: createEventId(),
                // id: 0,
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                classNames: ['teamSchedule'],
            });
        }
    };

    const handleEventClick = (clickInfo) => {
        console.log('클릭', clickInfo)
        if (clickInfo.el.classList.contains('teamSchedule')) {
            // if (clickInfo.el.draggable) {
            // if (clickInfo.el.id === 'team) {
            if (
                confirm(
                    `Are you sure you want to delete the event '${clickInfo.event.title}'`,
                )
            ) {
                clickInfo.event.remove();
            }
        }
    };

    //   const handleEvents = (events) => {
    //         console.log('인포', events);
    //         console.log('인포', events.view);
    //     this.setState({
    //       currentEvents: events
    //     })
    //   }

    function renderEventContent(eventInfo) {
        console.log('eventInfo', eventInfo)
        return (
            <>
                {/* <b>{eventInfo.timeText}</b> */}
                <i>{eventInfo.event.title}</i>
                {/* <i>{eventInfo.event.source.id}</i> */}
            </>
        );
    }

    const handleEventAdd = (addinfo) => {
        alert('추가' + JSON.stringify(addinfo));
    };

    const handleEventChange = (changeinfo) => {
        alert('바꿈' + JSON.stringify(changeinfo));
    };

    const handleEventRemove = (removeinfo) => {
        alert('삭제' + JSON.stringify(removeinfo));
    };

    return (
        <div className="demo-app">
            <div className="demo-app-main">
                <FullCalendar
                    ref={calendarRef}
                    plugins={[timeGridPlugin, interactionPlugin]}
                    headerToolbar={false}
                    // locale="koLocale"
                    initialDate="2023-01-02"
                    // initialView="timeGridWeek"
                    editable={false}
                    selectable={true}
                    selectMirror={true}
                    // eventMaxStack={null}
                    firstDay={1}
                    weekends={true}
                    slotEventOverlap={false}
                    allDaySlot={false}
                    slotMinTime="06:00:00"
                    dayHeaderFormat={{ weekday: 'short' }}
                    // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                    eventSources={eventSource} //{eventSources}
                    events={events}
                    // nowIndicator={true}
                    eventContent={renderEventContent} // custom render function
                    // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                    //
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                    eventMouseEnter={function (mouseEnterInfo) { console.log('Hover', mouseEnterInfo.event.source?.id); }}
                    // you can update a remote database when these fire:
                    eventAdd={handleEventAdd}
                    eventChange={handleEventChange}
                    eventRemove={handleEventRemove}
                />
                {/* <button onClick={handleApi}>클릭</button> */}
            </div>
        </div>
    );
};

export default Schedule;
