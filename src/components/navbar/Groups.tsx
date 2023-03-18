import { Nav } from '..';
import { GroupName, GroupsComponent } from '../../styles/componentStyle';
import { useMyTeams } from '../../hooks';

function Groups() {
    const { myTeams } = useMyTeams();

    return (
        <GroupsComponent>
            {myTeams?.map((group) => (
                <Nav key={group.teamId} url={`/teamschedule/${group.teamId}`}>
                    <GroupName>{group.name}</GroupName>
                </Nav>
            ))}
        </GroupsComponent>
    );
}

export default Groups;
