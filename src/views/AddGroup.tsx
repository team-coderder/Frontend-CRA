import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button } from '../components';
import { Main, Header, Field, InputBox } from '../styles/componentStyle';
import { useMyTeams } from '../hooks';

const AddGroup = () => {
    const navigate = useNavigate();
    const [groupName, setGroupName] = useState('');
    const { handleCreateTeam } = useMyTeams();

    const handleCreateGroup = async () => {
        const newTeam = await handleCreateTeam(groupName);
        if (newTeam) {
            navigate(`/teamschedule/${newTeam?.teamId}`);
        }
    };

    return (
        <Main>
            <Header>
                <h1>Create a New Group</h1>
            </Header>
            <Field>
                <h2>Name</h2>
                <InputBox>
                    <TextInput
                        margin="0 10px 0 0"
                        placeholder="Enter the name here."
                        value={groupName}
                        onChange={(e) => setGroupName(e.currentTarget.value)}
                    />
                    <Button onClick={handleCreateGroup} inverse>
                        Create
                    </Button>
                </InputBox>
            </Field>
        </Main>
    );
};

export default AddGroup;
