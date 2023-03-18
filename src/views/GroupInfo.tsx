import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTeamInfo, useMyInfo, useMyTeams } from '../hooks';
import { TextInput, Button, SearchID, Members } from '../components';
import { Main, Header, Field } from '../styles/componentStyle';

const GroupInfo = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {
        teamInfo,
        error,
        changeName,
        removeMember,
        inviteMember,
        uninviteMember,
    } = useTeamInfo(Number(params.teamId));
    const { user } = useMyInfo();
    const { handleDeleteTeam } = useMyTeams();
    const [name, setName] = useState<string | undefined>(teamInfo?.name);

    async function handleClickDelete() {
        if (params.teamId) {
            if (confirm(`그룹을 삭제할까요?`)) {
                await handleDeleteTeam(Number(params.teamId));
                navigate('/myschedule');
            }
        }
    }

    if (error) {
        return (
            <Main>
                <h1>팀 정보에 접근할 수 없습니다. 다시 시도해주세요.</h1>
            </Main>
        );
    }

    return (
        <Main>
            <Header>
                <h1>그룹 정보 수정</h1>
            </Header>
            <Field>
                <h2>그룹 이름</h2>
                <TextInput
                    margin="0 10px 0 0"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                />
                <Button onClick={async () => await changeName(name)} inverse>
                    이름 수정하기
                </Button>
            </Field>
            <Field>
                <h2>멤버 관리</h2>
                <div style={{ width: '100%' }}>
                    <SearchID handleAddMember={inviteMember} />
                    <h3>현재 멤버</h3>
                    <Members
                        myUsername={user?.username}
                        members={teamInfo?.teamMembers}
                        handleDeleteMember={removeMember}
                    />
                    <h3>초대한 멤버</h3>
                    <Members
                        members={teamInfo?.invitations}
                        handleDeleteMember={uninviteMember}
                    />
                </div>
            </Field>
            <Field>
                <h2>그룹 삭제</h2>
                <Button inverse onClick={handleClickDelete}>
                    그룹 삭제
                </Button>
            </Field>
        </Main>
    );
};

export default GroupInfo;
