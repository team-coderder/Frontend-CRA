import { Fragment } from 'react';
import { Button } from '..';
import {
    InvitationsComponent,
    NoticeText,
    InvitationsGrid,
    InvitationName,
} from '../../styles/componentStyle';
import { useMyInvitations } from '../../hooks';

function Invitations() {
    const { myInvitations, acceptInvite, rejectInvite } = useMyInvitations();

    return (
        <>
            <InvitationsComponent>
                {myInvitations?.length ? (
                    <>
                        <NoticeText>초대 받은 그룹</NoticeText>
                        <InvitationsGrid>
                            {myInvitations.map((invite) => (
                                <Fragment key={invite.invitationId}>
                                    <InvitationName>
                                        {invite.team.name}
                                    </InvitationName>
                                    <Button
                                        width="50px"
                                        onClick={() =>
                                            acceptInvite(invite.invitationId)
                                        }
                                    >
                                        수락
                                    </Button>
                                    <Button
                                        width="50px"
                                        onClick={() =>
                                            rejectInvite(invite.invitationId)
                                        }
                                    >
                                        거절
                                    </Button>
                                </Fragment>
                            ))}
                        </InvitationsGrid>
                    </>
                ) : (
                    <NoticeText>초대장이 없습니다</NoticeText>
                )}
            </InvitationsComponent>
        </>
    );
}

export default Invitations;
