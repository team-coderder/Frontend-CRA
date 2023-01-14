import { Button } from '..';
import { InvitationTable } from '../../styles/navbar/invitations';

type InvitedGroups = {
    invitationId: number;
    fromTeamId: number;
    fromMemberId: number;
    toMemberId: number;
    createdAt: string;
}

const invitedGroups: InvitedGroups[] = [
    {
        "invitationId": 4,
        "fromTeamId": 6,
        "fromMemberId": 7,
        "toMemberId": 13,
        "createdAt": "2022-11-10T15:30:48"
    },
    {
        "invitationId": 5,
        "fromTeamId": 7,
        "fromMemberId": 7,
        "toMemberId": 13,
        "createdAt": "2022-11-10T15:32:40"
    },
];

function Invitations() {
    return (
        <>
            <InvitationTable>
                <caption>초대 받은 그룹</caption>
                {invitedGroups.length ? (
                    <tbody>
                        {invitedGroups.map((group) => (
                            <tr key={group?.invitationId}>
                                <th>{group?.fromTeamId}</th>
                                <td>
                                    <Button width="4em" height="2.4em">
                                        수락
                                    </Button>
                                </td>
                                <td>
                                    <Button width="4em" height="2.4em">
                                        거절
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                ) : (
                    <div>초대장이 없습니다</div>
                )}
            </InvitationTable>
        </>
    );
}

export default Invitations;
