import { useNavigate } from 'react-router-dom';
import { Members, Button, Nav } from '../../components';
import { useMyInfo, useMyTeams } from '../../hooks';
// import { Info } from '../../styles/componentStyle';

const ScheduleInfo = ({ teamId, isMySchedule, isLeader, teamMembers }) => {
    const navigate = useNavigate();
    const { user } = useMyInfo();
    const { handleLeaveTeam } = useMyTeams();

    async function handleClickLeave() {
        if (confirm(`그룹을 탈퇴할까요?`)) {
            await handleLeaveTeam(Number(teamId));
            navigate(`/mySchedule`);
        }
    }

    return (
        <>
            {!isMySchedule && (
                <>
                    <Members
                        myUsername={user?.username}
                        members={teamMembers}
                    />
                    <div style={{ marginBottom: '`10px' }} />
                </>
            )}
            {!isMySchedule &&
                (isLeader ? (
                    <Button inverse width="100%">
                        <Nav url={`/groupinfo/${teamId}`}>Edit Group Info</Nav>
                    </Button>
                ) : (
                    <Button
                        onClick={handleClickLeave}
                        inverse
                        // shadow
                        width="100%"
                    >
                        Leave Group
                    </Button>
                ))}
        </>
    );
};

export default ScheduleInfo;
