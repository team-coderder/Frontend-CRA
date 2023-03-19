import { Button } from '..';
import {
    Group,
    GroupName,
    GroupsComponent,
    Buttons,
    LabelText,
} from '../../styles/componentStyle';
import { useMyInvitations } from '../../hooks';

function Invitations() {
    const { myInvitations, acceptInvite, rejectInvite } = useMyInvitations();

    return (
        <GroupsComponent>
            {myInvitations?.map((invite) => (
                <Group key={invite.invitationId}>
                    <GroupName limitWidth>
                        <LabelText>You're invited!</LabelText>
                        {invite.team.name}
                    </GroupName>
                    <Buttons>
                        <Button
                            inverse
                            width="50px"
                            onClick={() => acceptInvite(invite.invitationId)}
                        >
                            Yes
                        </Button>
                        <Button
                            inverse
                            width="50px"
                            onClick={() => rejectInvite(invite.invitationId)}
                        >
                            No
                        </Button>
                    </Buttons>
                </Group>
            ))}
        </GroupsComponent>
    );
}

export default Invitations;
