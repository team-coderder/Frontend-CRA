import styled from '@emotion/styled/macro';
import { Member } from '..';
import { generateColor } from '../../utils';
import type { TeamMember, Invitation } from '../../types';

const MemberBox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    gap: 5px;
    :not(:last-of-type) {
        margin-bottom: 20px;
    }
`;

type MembersProp = {
    myUsername?: string;
    members: TeamMember[] | Invitation[] | undefined;
    handleDeleteMember?: (id: number) => Promise<void>;
};

const Members = ({ myUsername, members, handleDeleteMember }: MembersProp) => {
    const isInvitation = members?.length && members[0].hasOwnProperty('invitationId');
    const idProperty = isInvitation ? 'invitationId' : 'memberId';

    return (
        <MemberBox>
            {members?.map((member) => {
                const isMe = member.username && member.username === myUsername;
                return (
                    <Member
                        key={member[idProperty]}
                        backgroundColor={generateColor(member.username ?? member.toMember?.username)}
                        disable={!isMe && handleDeleteMember ? true : false}
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
            })}
        </MemberBox>
    );
};

export default Members;
