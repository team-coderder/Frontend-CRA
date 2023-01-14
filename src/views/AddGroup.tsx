import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button, MemberManagement } from '../components';
import { createTeam, inviteUser } from '../api';
import { User } from '../types';
import { Container, Header, Field } from '../styles/globalStyle/PageLayout';
import useMyTeams from '../hooks/swr/team/useMyTeams';

const AddGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [newMembers, setNewMembers] = useState(new Map<number, User>());
    const navigate = useNavigate();
    const { myTeams, mutate } = useMyTeams();

    const handleCreateGroup = async () => {
        try {
            const correctName = groupName && /\s/.test(groupName) === false;
            if (correctName) {
                const { data } = await createTeam({ name: groupName });
                mutate({ teams: myTeams ? [...myTeams, data] : [data] });
                await inviteUser(data.teamId, Array.from(newMembers.keys()));
                navigate('/teamschedule/' + data.teamId);
            } else {
                throw Error(
                    '올바른 그룹 이름을 입력하세요.\n이름을 입력하지 않았거나 공백이 포함되어 있습니다.',
                );
            }
        } catch (e) {
            alert(e);
        }
    };

    const onChangeGroupName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGroupName(event.currentTarget.value);
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
                    onChange={onChangeGroupName}
                />
            </Field>
            <MemberManagement
                newMembers={newMembers}
                setNewMembers={setNewMembers}
            />
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
