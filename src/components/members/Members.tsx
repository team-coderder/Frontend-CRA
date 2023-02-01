import styled from '@emotion/styled/macro';
import { Member } from '..';
import { generateColor } from '../../utils';
import type { TeamMember, Invitation } from '../../types';

const MemberBox = styled.div`
    margin-bottom: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    gap: 5px;
`;

type MembersProp = {
    members: TeamMember[] | Invitation[] | undefined;
    handleDeleteMember?: (id: number) => Promise<void>;
};

const Members = ({ members, handleDeleteMember }: MembersProp) => {
    const isInvitationList = members?.length && members[0].hasOwnProperty('invitationId');
    const idProperty = isInvitationList ? 'invitationId' : 'memberId';
    const nameProperty = isInvitationList ? 'toMemberId' : 'nickname';

    return (
        <MemberBox>
            {members?.map((member) => (
                <Member
                    key={member[idProperty]}
                    backgroundColor={generateColor(member[nameProperty])}
                    disable={handleDeleteMember ? true : false}
                    memberId={member[idProperty]}
                    onDelete={() => {
                        handleDeleteMember!(member[idProperty]);
                    }}
                >
                    {member.nickname ?? member.toMemberId}
                </Member>
            ))}
        </MemberBox>
    );
};

export default Members;
