import { Nav } from '..';
import { GroupName, List } from '../../styles/navbar/groupbar';
import { useMyTeams } from '../../hooks';

function Groups() {
    const { myTeams } = useMyTeams();

    return (
        <List>
            {myTeams?.map((group) => (
                <Nav
                    key={group.teamId}
                    url={`/teamschedule/${group.teamId}`}
                    weight="normal"
                >
                    <GroupName>{group.name}</GroupName>
                </Nav>
            ))}
        </List>
    );
}

export default Groups;
