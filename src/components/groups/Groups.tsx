import { useLocation } from 'react-router-dom';
import { Nav } from '..';
import { Group, GroupName, GroupsComponent } from '../../styles/componentStyle';
import { useMyTeams } from '../../hooks';

function Groups() {
    const location = useLocation();
    const teamId = location.pathname.match(/teamschedule\/(.*)/)?.[1];
    const { myTeams } = useMyTeams();

    return (
        <GroupsComponent>
            <Group>
                <Nav url={`/myschedule`} spread>
                    <GroupName active={location.pathname === '/myschedule'}>
                        My Schedule
                    </GroupName>
                </Nav>
            </Group>
            {myTeams?.map((group) => (
                <Group key={group.teamId}>
                    <Nav url={`/teamschedule/${group.teamId}`} spread>
                        <GroupName active={`${group.teamId}` === teamId}>
                            {group.name}
                        </GroupName>
                    </Nav>
                </Group>
            ))}
        </GroupsComponent>
    );
}

export default Groups;
