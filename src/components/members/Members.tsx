import { Member } from '..';
import { generateColor } from '../../utils';
import type { MembersProp } from '../../types';
import { MembersComponent, NoticeText } from '../../styles/componentStyle';

const Members = ({ myUsername, members, handleDeleteMember }: MembersProp) => {
    const isInvitation =
        members?.length && members[0].hasOwnProperty('invitationId');
    const idProperty = isInvitation ? 'invitationId' : 'memberId';

    return (
        <MembersComponent>
            {members?.length ? (
                members?.map((member) => {
                    const isMe =
                        member.username && member.username === myUsername;
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
        </MembersComponent>
    );
};

export default Members;
