import { Button } from '..';
import { InvitationTable, NoticeText } from '../../styles/navbar/invitations';
import { useMyInvitations } from '../../hooks';

function Invitations() {
    const { myInvitations, acceptInvite, rejectInvite } = useMyInvitations();

    return (
        <>
            <InvitationTable>
                <caption>초대 받은 그룹</caption>
                {myInvitations?.length ? (
                    <tbody>
                        {myInvitations.map((invite) => (
                            <tr key={invite.invitationId}>
                                <th>{invite.fromTeamId}</th>
                                <td>
                                    <Button
                                        width="4em"
                                        onClick={() =>
                                            acceptInvite(invite.invitationId)
                                        }
                                    >
                                        수락
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        width="4em"
                                        onClick={() =>
                                            rejectInvite(invite.invitationId)
                                        }
                                    >
                                        거절
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                ) : (
                    <NoticeText>초대장이 없습니다</NoticeText>
                )}
            </InvitationTable>
        </>
    );
}

export default Invitations;
