import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button } from '../components';
import { Container, Header, Field } from '../styles/globalStyle/PageLayout';
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
        <Container>
            <Header>
                <h1>그룹 생성하기</h1>
            </Header>
            <Field>
                <h3>그룹 이름</h3>
                <TextInput
                    height="30px"
                    placeholder="그룹 이름을 입력해주세요."
                    value={groupName}
                    onChange={(e) => setGroupName(e.currentTarget.value)}
                />
            </Field>
            <Field>
                <h3>그룹 추가</h3>
                <Button
                    onClick={handleCreateGroup}
                    height="2.5rem"
                    width="9em"
                    hoverBgColor="black"
                >
                    생성하기
                </Button>
            </Field>
        </Container>
    );
};

export default AddGroup;
