import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTeamInfo, useMyInfo, useMyTeams } from '../hooks';
import { TextInput, Button, SearchID, Members } from '../components';
import { Container, Header, Field } from '../styles/globalStyle/PageLayout';

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
            await handleDeleteTeam(Number(params.teamId));
            navigate('/myschedule');
        }
    }

    if (error) {
        return (
            <Container>
                <h1>팀 정보에 접근할 수 없습니다. 다시 시도해주세요.</h1>
            </Container>
        );
    }

    return (
        <Container>
            <Header>
                <h1>그룹 정보 수정</h1>
            </Header>
            <Field>
                <h3>그룹 이름</h3>
                <TextInput
                    height="2rem"
                    margin="0 20px 0 0"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                />
                <Button
                    height="2.5rem"
                    width="9em"
                    onClick={async () => await changeName(name)}
                >
                    이름 수정하기
                </Button>
            </Field>
            <Field>
                <h3>멤버 관리</h3>
                <div>
                    <SearchID height="30px" handleAddMember={inviteMember} />
                    <Members
                        myUsername={user?.username}
                        members={teamInfo?.teamMembers}
                        handleDeleteMember={removeMember}
                    />
                    <Members
                        members={teamInfo?.invitations}
                        handleDeleteMember={uninviteMember}
                    />
                </div>
            </Field>
            <Field>
                <h3>그룹 삭제</h3>
                <Button height="2.5rem" width="9em" onClick={handleClickDelete}>
                    그룹 삭제
                </Button>
            </Field>
            <Field>
                <h3>그룹 탈퇴</h3>
                <Button height="2.5rem" width="9em">
                    그룹 탈퇴
                </Button>
            </Field>
        </Container>
    );
};

export default GroupInfo;
