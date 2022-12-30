import React, { useState } from 'react';
import { TextInput, Button, MemberManagement } from '../components';
import { createTeam } from '../api';
import { User } from '../types';
import {
    AddGroupContainer,
    InputContainer,
    InputBox,
    Title,
} from '../styles/member/member';
import {
    ButtonContainer,
    ButtonBox,
    Header,
} from '../styles/globalStyle/PageLayout';

const AddGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [newMembers, setNewMembers] = useState<Map<number, User>>(new Map<number, User>());

    const handleCreateGroup = async () => {
        try {
            const correctName = groupName && /\s/.test(groupName) === false;
            if (correctName) {
                const { data } = await createTeam({ name: groupName });
                // 멤버 추가
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
        <AddGroupContainer>
            <Title>
                <h1>그룹 생성하기</h1>
            </Title>
            <InputContainer className="groupName">
                <Header>그룹 이름</Header>
                <InputBox>
                    <TextInput
                        height="30px"
                        placeholder="그룹 이름을 입력해주세요."
                        value={groupName}
                        onChange={onChangeGroupName}
                    />
                </InputBox>
            </InputContainer>
            <MemberManagement
                newMembers={newMembers}
                setNewMembers={setNewMembers}
            />
            <ButtonContainer className="addGroupBox">
                <Header>그룹 추가</Header>
                <ButtonBox>
                    <Button
                        onClick={handleCreateGroup}
                        width="250px"
                        hoverBgColor="black"
                    >
                        생성하기
                    </Button>
                </ButtonBox>
            </ButtonContainer>
        </AddGroupContainer>
    );
};

export default AddGroup;
