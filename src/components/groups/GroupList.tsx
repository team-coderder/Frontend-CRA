import { Button, Nav } from '..';
import Groups from './Groups';
import Invitations from './Invitations';
import { GroupListComponent } from '../../styles/componentStyle';

function GroupList() {
    return (
        <GroupListComponent>
            <Groups />
            <Invitations />
            <div style={{ marginBottom: '10px' }} />
            <Nav url="/addGroup">
                <Button width="100%" inverse>
                    New Group
                </Button>
            </Nav>
        </GroupListComponent>
    );
}

export default GroupList;
