import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button } from '../components';
import { Main, Header, Field } from '../styles/globalStyle/PageLayout';
import { useMyTeams } from '../hooks';
import { isNameValid } from '../utils';

const AddGroup = () => {
    const navigate = useNavigate();
    const [groupName, setGroupName] = useState('');
    const { handleCreateTeam } = useMyTeams();

    const handleCreateGroup = async () => {
        try {
            if (isNameValid(groupName)) {
                const newTeam = await handleCreateTeam(groupName);
                navigate(`/teamschedule/${newTeam?.teamId}`);
                alert(
                    `팀 ${newTeam?.name}을 만들었습니다.\n[그룹 정보 수정]에서 멤버를 추가해보세요!`,
                );
            }
        } catch (e) {
            alert(e);
        }
    };

    return (
        <Main>
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
        </Main>
    );
};

export default AddGroup;
