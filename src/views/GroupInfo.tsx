import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTeamInfo } from '../hooks';
import { isNameValid } from '../utils';
import { TextInput, Button, SearchID, Members } from '../components';
import { Container, Header, Field } from '../styles/globalStyle/PageLayout';

const GroupInfo = () => {
    const params = useParams();
    const { teamInfo, error, changeName, inviteMember, uninviteMember } =
        useTeamInfo(Number(params.teamId));
    const [name, setName] = useState<string | undefined>(teamInfo?.name);

    if (error) {
        return (
            <Container>
                <h1>팀 정보에 접근할 수 없습니다. 다시 시도해주세요.</h1>
            </Container>
        );
    }

    const handleChangeName = async () => {
        if (isNameValid(name)) {
            await changeName(name as string);
        }
    };

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
                <Button height="2.5rem" width="9em" onClick={handleChangeName}>
                    이름 수정하기
                </Button>
            </Field>
            <Field>
                <h3>멤버 관리</h3>
                <div>
                    <SearchID height="30px" handleAddMember={inviteMember} />
                    <Members members={teamInfo?.teamMembers} />
                    <Members
                        members={teamInfo?.invitations}
                        handleDeleteMember={uninviteMember}
                    />
                </div>
            </Field>
            <Field>
                <h3>그룹 삭제</h3>
                <Button height="2.5rem" width="9em">
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
