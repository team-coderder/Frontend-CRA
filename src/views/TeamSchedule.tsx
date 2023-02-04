import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EventApi, DateSelectArg, EventClickArg } from '@fullcalendar/core';
import { Button, Nav, Members, Schedule } from '../components';
import { useTeamInfo, useMemberSchedule, useTeamSchedule } from '../hooks';
import { isEventAllowed } from '../utils';
import {
    Container,
    Header,
    Field,
    AlignRight,
} from '../styles/globalStyle/PageLayout';
import { MainSchedule } from '../styles/schedule/schedule';

const TeamSchedule: React.FC = () => {
    const { teamId } = useParams();
    const [isLeader, setIsLeader] = useState(true);
    const [events, setEvents] = useState<EventApi[]>([]);
    const { teamInfo } = useTeamInfo(Number(teamId));
    const { memberSchedule } = useMemberSchedule(Number(teamId));
    const { teamSchedule, handleEventAdd, handleEventRemove } = useTeamSchedule(Number(teamId));

    useEffect(() => {
        if (teamInfo?.myRole === 'LEADER') {
            setIsLeader(true);
        }
    }, [teamInfo?.myRole]);

    function handleEvents(events: EventApi[]) {
        const teamEvents = events.filter(
            (event) => event.extendedProps.teamId !== undefined,
        );
        setEvents(teamEvents);
    }

    function handleDateSelect(selectInfo: DateSelectArg) {
        const start = selectInfo.startStr;
        const end = selectInfo.endStr;
        const calendarApi = selectInfo.view.calendar;

        if (isEventAllowed(start, end, calendarApi, events)) {
            const title = prompt('일정을 입력하세요');
            if (title) {
                if (title.length > 20) {
                    alert('일정 이름이 너무 깁니다 (20자 이하)');
                    return;
                }
                calendarApi.addEvent({
                    id: 'temp_id', // 바로 삭제하기 위해 필요
                    title,
                    start,
                    end,
                    teamId: teamId,
                });
            }
        }
    }

    function handleEventClick(clickInfo: EventClickArg) {
        if (isLeader && clickInfo.event.extendedProps.teamId) {
            if (confirm(`일정 '${clickInfo.event.title}' 를 지울까요?`)) {
                clickInfo.event.remove();
            }
        }
    }

    return (
        <Container>
            <Header>
                <h1>{teamInfo?.name}</h1>
                {isLeader && (
                    <AlignRight style={{ marginTop: '15px' }}>
                        <Button hoverBgColor="black" height="2.5rem">
                            <Nav
                                url={`/groupinfo/${teamId}`}
                                size="medium"
                                fill
                                center
                            >
                                그룹 정보 수정
                            </Nav>
                        </Button>
                    </AlignRight>
                )}
            </Header>
            <MainSchedule>
                <Schedule
                    selectable={isLeader}
                    eventSources={[
                        ...(teamSchedule ?? []),
                        ...(memberSchedule ?? []),
                    ]}
                    handleEvents={handleEvents}
                    handleDateSelect={handleDateSelect}
                    handleEventClick={handleEventClick}
                    handleEventAdd={handleEventAdd}
                    handleEventRemove={handleEventRemove}
                />
            </MainSchedule>
            <Field>
                <h3>그룹원</h3>
                <Members members={teamInfo?.teamMembers} />
            </Field>
            {/* <Field>
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
            </Field> */}
        </Container>
    );
};

export default TeamSchedule;
