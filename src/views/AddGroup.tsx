import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button } from '../components';
import { Main, Header, Field } from '../styles/componentStyle';
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
                <h1>그룹 생성하기</h1>
            </Header>
            <Field>
                <h2>그룹 이름</h2>
                <TextInput
                    placeholder="그룹 이름을 입력해주세요"
                    value={groupName}
                    onChange={(e) => setGroupName(e.currentTarget.value)}
                />
            </Field>
            <Field>
                <h2>그룹 추가</h2>
                <Button onClick={handleCreateGroup} inverse>
                    생성하기
                </Button>
            </Field>
        </Main>
    );
};

export default AddGroup;
