import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTeamInfo, useMyInfo, useMyTeams, useDialog } from '../hooks';
import { TextInput, Button, SearchID, Members } from '../components';
import { Main, Header, Field, InputBox } from '../styles/componentStyle';

const GroupInfo = () => {
    const { teamId } = useParams();
    const navigate = useNavigate();
    const {
        teamInfo,
        error,
        changeName,
        removeMember,
        inviteMember,
        uninviteMember,
    } = useTeamInfo(teamId);
    const { user } = useMyInfo();
    const { handleDeleteTeam } = useMyTeams();
    const [name, setName] = useState<string | undefined>(teamInfo?.name);
    const { confirm } = useDialog();

    async function handleClickDelete() {
        if (teamId) {
            if (await confirm(`Do you want to delete this group?`)) {
                await handleDeleteTeam(Number(teamId));
                navigate('/myschedule');
            }
        }
    }

    if (error) {
        return (
            <Main>
                <h1>Sorry! Try again.</h1>
            </Main>
        );
    }

    return (
        <Main>
            <Header>
                <h1>Edit Group Info</h1>
            </Header>
            <Field>
                <h2>Name</h2>
                <InputBox>
                    <TextInput
                        margin="0 10px 0 0"
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                    <Button
                        onClick={async () => await changeName(name)}
                        inverse
                    >
                        Edit
                    </Button>
                </InputBox>
            </Field>
            <Field>
                <h2>Members</h2>
                <div style={{ width: '100%' }}>
                    <SearchID handleAddMember={inviteMember} />
                    <h3>Current members</h3>
                    <Members
                        myUsername={user?.username}
                        members={teamInfo?.teamMembers}
                        handleDeleteMember={removeMember}
                    />
                    <h3>Invited members</h3>
                    <Members
                        members={teamInfo?.invitations}
                        handleDeleteMember={uninviteMember}
                    />
                </div>
            </Field>
            <Field>
                <h2>Delete Group</h2>
                <Button inverse onClick={handleClickDelete}>
                    Delete
                </Button>
            </Field>
        </Main>
    );
};

export default GroupInfo;
