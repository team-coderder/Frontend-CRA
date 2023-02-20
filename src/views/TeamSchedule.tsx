import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    EventApi,
    DateSelectArg,
    EventClickArg,
    EventHoveringArg,
} from '@fullcalendar/core';
import { Button, Nav, Members, Schedule } from '../components';
import {
    useMyInfo,
    useMyTeams,
    useTeamInfo,
    useMemberSchedule,
    useTeamSchedule,
} from '../hooks';
import { isEventAllowed, setInset, showTooltip, hideTooltip } from '../utils';
import {
    Main,
    Header,
    Field,
    AlignRight,
    Spinner,
} from '../styles/globalStyle/PageLayout';

const TeamSchedule: React.FC = () => {
    const { teamId } = useParams();
    const navigate = useNavigate();
    const [isLeader, setIsLeader] = useState(false);
    const [events, setEvents] = useState<EventApi[]>([]);
    const { user } = useMyInfo();
    const { handleLeaveTeam } = useMyTeams();
    const { teamInfo, isLoading: infoLoading } = useTeamInfo(Number(teamId));
    const { memberSchedule } = useMemberSchedule(Number(teamId));
    const { teamSchedule, handleEventAdd, handleEventRemove } = useTeamSchedule(Number(teamId));

    useEffect(() => {
        if (teamInfo?.myRole === 'LEADER') {
            setIsLeader(true);
        } else {
            setIsLeader(false);
        }
    }, [teamInfo?.myRole]);

    useEffect(() => {
        setInset(teamInfo?.teamMembers?.length);
    }, [teamSchedule, memberSchedule, teamInfo?.teamMembers]);

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
        hideTooltip(clickInfo);
        if (isLeader && clickInfo.event.extendedProps.teamId) {
            if (confirm(`일정 '${clickInfo.event.title}' 를 지울까요?`)) {
                clickInfo.event.remove();
            }
        }
    }

    async function handleClickLeave() {
        if (confirm(`그룹을 탈퇴할까요?`)) {
            await handleLeaveTeam(Number(teamId));
            navigate(`/mySchedule`);
        }
    }

    function handleMouseEnter(hoverInfo: EventHoveringArg) {
        showTooltip(hoverInfo);
    }

    function handleMouseLeave(leaveInfo: EventHoveringArg) {
        hideTooltip(leaveInfo);
    }

    if (infoLoading) {
        return (
            <Main>
                <Spinner />
            </Main>
        );
    }

    return (
        <Main>
            <Header>
                <h1>{teamInfo?.name}</h1>
                <AlignRight style={{ marginTop: '15px' }}>
                    {isLeader ? (
                        <Button inverse>
                            <Nav url={`/groupinfo/${teamId}`}>
                                그룹 정보 수정
                            </Nav>
                        </Button>
                    ) : (
                        <Button onClick={handleClickLeave} inverse>그룹 탈퇴</Button>
                    )}
                </AlignRight>
            </Header>
            <div style={{ marginBottom: '50px' }}>
                <Schedule
                    selectable={isLeader}
                    eventSources={[
                        ...(teamSchedule ?? []),
                        ...(memberSchedule ?? []),
                    ]}
                    handleEvents={handleEvents}
                    handleDateSelect={handleDateSelect}
                    handleEventClick={handleEventClick}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    handleEventAdd={handleEventAdd}
                    handleEventRemove={handleEventRemove}
                />
            </div>
            <Field>
                <h2>그룹원</h2>
                <div style={{ width: '100%' }}>
                    <Members
                        myUsername={user?.username}
                        members={teamInfo?.teamMembers}
                    />
                </div>
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
                </Field>*/}
        </Main>
    );
};

export default TeamSchedule;
