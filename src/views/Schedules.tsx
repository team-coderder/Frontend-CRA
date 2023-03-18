import { useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BsFillCaretDownFill } from 'react-icons/bs';
import {
    Main,
    Header,
    Spinner,
    FlexPC,
    ScheduleContainer,
    InvisiblePC,
    InvisibleMob,
} from '../styles/componentStyle';
import {
    MySchedule,
    TeamSchedule,
    ScheduleInfo,
    Groupbar,
} from '../components';
import { useTeamInfo, useDialog } from '../hooks';

const Schedules = () => {
    const location = useLocation();
    const { teamId } = useParams();
    const isMySchedule = location.pathname === '/myschedule';
    const { teamInfo, isLoading: infoLoading } = useTeamInfo(teamId);
    const isLeader = teamInfo?.myRole === 'LEADER' || false;
    const { show } = useDialog();

    const showConfirm = useCallback(async () => {
        await show('My Groups', '', <Groupbar />);
    }, []);

    return !isMySchedule && infoLoading ? (
        <Main>
            <Spinner />
        </Main>
    ) : (
        <Main>
            <FlexPC>
                <Header>
                    <div style={{ marginRight: '20px' }}>
                        <h1
                            onClick={showConfirm}
                            style={{
                                cursor: 'pointer',
                                marginBottom: '30px',
                            }}
                        >
                            {isMySchedule ? 'My Schedule' : teamInfo?.name}
                            <BsFillCaretDownFill size="20" />
                        </h1>
                        <InvisibleMob>
                            <ScheduleInfo
                                teamId={teamId}
                                isMySchedule={isMySchedule}
                                isLeader={isLeader}
                                teamMembers={teamInfo?.teamMembers}
                            />
                        </InvisibleMob>
                    </div>
                </Header>
                <ScheduleContainer>
                    {isMySchedule ? (
                        <MySchedule />
                    ) : (
                        <TeamSchedule
                            teamId={teamId}
                            isLeader={isLeader}
                            teamInfo={teamInfo}
                        />
                    )}
                </ScheduleContainer>
                <InvisiblePC>
                    <ScheduleInfo
                        teamId={teamId}
                        isMySchedule={isMySchedule}
                        isLeader={isLeader}
                        teamMembers={teamInfo?.teamMembers}
                    />
                </InvisiblePC>
            </FlexPC>
        </Main>
    );
};

export default Schedules;
