import styled from '@emotion/styled/macro';
import { Member } from '..';
import { generateColor } from '../../utils';
import type { TeamMember, Invitation } from '../../types';

type MembersProp = {
    myUsername?: string;
    members: TeamMember[] | Invitation[] | undefined;
    handleDeleteMember?: (id: number) => Promise<void>;
};

const MembersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 130px);
    gap: 5px;
    :not(:last-of-type) {
        margin-bottom: 20px;
    }
`;

const NoticeText = styled.div`
    color: ${({ theme }) => theme.font.color.sub};
    font-size: ${({ theme }) => theme.font.size.label};
`;

const Members = ({ myUsername, members, handleDeleteMember }: MembersProp) => {
    const isInvitation = members?.length && members[0].hasOwnProperty('invitationId');
    const idProperty = isInvitation ? 'invitationId' : 'memberId';

    return (
        <MembersContainer>
            {members?.length ? (
                members?.map((member) => {
                    const isMe = member.username && member.username === myUsername;
                    return (
                        <Member
                            key={member[idProperty]}
                            backgroundColor={generateColor(
                                member.username ?? member.toMember?.username,
                            )}
                            deletable={
                                !isMe && handleDeleteMember ? true : false
                            }
                            memberId={member[idProperty]}
                            onDelete={() => {
                                handleDeleteMember!(member[idProperty]);
                            }}
                        >
                            {isMe
                                ? '나'
                                : member.nickname ?? member.toMember?.nickname}
                        </Member>
                    );
                })
            ) : (
                <NoticeText>멤버가 없습니다</NoticeText>
            )}
        </MembersContainer>
    );
};

export default Members;
