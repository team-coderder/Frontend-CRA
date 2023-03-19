import { useNavigate } from 'react-router-dom';
import { Members, Button, Nav } from '../../components';
import { useDialog, useMyInfo, useMyTeams } from '../../hooks';

const ScheduleInfo = ({ teamId, isMySchedule, isLeader, teamMembers }) => {
    const navigate = useNavigate();
    const { user } = useMyInfo();
    const { handleLeaveTeam } = useMyTeams();
    const { confirm } = useDialog();

    async function handleClickLeave() {
        if (await confirm(`Do you want to leave this group?`)) {
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
                    <Button inverse width="100%" shadow>
                        <Nav url={`/groupinfo/${teamId}`}>Edit Group Info</Nav>
                    </Button>
                ) : (
                    <Button
                        onClick={handleClickLeave}
                        inverse
                        shadow
                        width="100%"
                    >
                        Leave Group
                    </Button>
                ))}
        </>
    );
};

export default ScheduleInfo;
