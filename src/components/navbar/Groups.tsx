import { Nav } from '..';
import { GroupName, List } from '../../styles/componentStyle/navbar';
import { useMyTeams } from '../../hooks';

function Groups() {
    const { myTeams } = useMyTeams();

    return (
        <List>
            {myTeams?.map((group) => (
                <Nav key={group.teamId} url={`/teamschedule/${group.teamId}`}>
                    <GroupName>{group.name}</GroupName>
                </Nav>
            ))}
        </List>
    );
}

export default Groups;
