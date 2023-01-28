import styled from '@emotion/styled/macro';
import { Member } from '..';
import { generateColor } from '../../hooks/ColorMethod';
import type { TeamMember, Invitation } from '../../types';

const MemberBox = styled.div`
    margin-bottom: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    gap: 5px;
`;

type MembersProp = {
    members: TeamMember[] | Invitation[] | undefined;
    handleDeleteMember?: () => void;
};

const Members = ({ members, handleDeleteMember }: MembersProp) => {
    return (
        <MemberBox>
            {members?.map((member) => (
                <Member
                    key={member.memberId}
                    backgroundColor={generateColor(member.username)}
                    disable={handleDeleteMember ? true : false}
                    memberId={member.memberId}
                    onDelete={handleDeleteMember}
                >
                    {member.nickname ?? member.toMemberId}
                </Member>
            ))}
        </MemberBox>
    );
};

export default Members;
