import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { BsPlusCircle } from 'react-icons/bs';
import { Member } from '..';
import SearchID from './SearchID';
import { Field } from '../../styles/globalStyle/PageLayout';
import { findByUsername } from '../../api';
import { generateColor } from '../../hooks/ColorMethod';
import { User } from '../../types';

type MemberManagementProp = {
    newMembers: Map<number, User>;
    setNewMembers: React.Dispatch<React.SetStateAction<Map<number, User>>>;
};

export const MemberBox = styled.div`
    margin-left: 200px;
    margin-bottom: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    gap: 10px;
`;

const MemberManagement = ({
    newMembers,
    setNewMembers,
}: MemberManagementProp) => {
    const [focus, setFocus] = useState(false);
    const [searchId, setSearchId] = useState('');
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setFocus(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchRef]);

    const handleAddMember = () => {
        const addMember = async (searchId: string) => {
            if (searchId) {
                try {
                    const { data } = await findByUsername(searchId);
                    if (data.members.length) {
                        const member = data.members[0];
                        if (member.username === searchId) {
                            if (!newMembers.has(member.id)) {
                                setNewMembers(new Map(newMembers.set(member.id, member)));
                                // setNewMembers(newMembers.set(member.id, member));
                                setSearchId('');
                                return;
                            } else {
                                throw Error('이미 추가한 멤버입니다');
                            }
                        }
                    }
                    throw Error('해당 아이디로 멤버를 찾지 못했습니다');
                } catch (e) {
                    alert(e);
                }
            }
        };
        addMember(searchId);
    };

    const handleDeleteMember = (id: number) => {
        if (newMembers.delete(id)) {
            setNewMembers(new Map(newMembers));
        }
    };

    return (
        <>
            <Field>
                <h3>멤버 추가</h3>
                <div ref={searchRef} onFocus={() => setFocus(true)}>
                    <SearchID
                        focus={focus}
                        height="30px"
                        searchId={searchId}
                        setSearchId={setSearchId}
                    />
                </div>
                <BsPlusCircle
                    size="18"
                    style={{ cursor: 'pointer' }}
                    onClick={handleAddMember}
                />
            </Field>
            <MemberBox>
                {(() => {
                    const members: React.ReactNode[] = [];
                    newMembers.forEach((member) => {
                        members.push(
                            <Member
                                key={member.id}
                                space={5}
                                backgroundColor={generateColor(member.username)}
                                color="white"
                                disable
                                memberId={member.id}
                                onDelete={handleDeleteMember}
                            >
                                {member.nickname}
                            </Member>,
                        );
                    });
                    return members;
                })()}
            </MemberBox>
        </>
    );
};

export default MemberManagement;
