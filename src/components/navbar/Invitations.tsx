import { Fragment } from 'react';
import { Button } from '..';
import {
    InvitationsContainer,
    NoticeText,
    Grid,
    InviteName,
} from '../../styles/componentStyle/navbar';
import { useMyInvitations } from '../../hooks';

function Invitations() {
    const { myInvitations, acceptInvite, rejectInvite } = useMyInvitations();

    return (
        <>
            <InvitationsContainer>
                {myInvitations?.length ? (
                    <>
                        <NoticeText>초대 받은 그룹</NoticeText>
                        <Grid>
                            {myInvitations.map((invite) => (
                                <Fragment key={invite.invitationId}>
                                    <InviteName>{invite.team.name}</InviteName>
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
                        </Grid>
                    </>
                ) : (
                    <NoticeText>초대장이 없습니다</NoticeText>
                )}
            </InvitationsContainer>
        </>
    );
}

export default Invitations;
