import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Button, Nav } from '..';
import {
    VerticalBar,
    GroupList,
    GroupName,
    List,
} from '../../styles/componentStyle/navbar';
import { Icon } from '../../styles/globalStyle/PageLayout';
import { useMyTeams } from '../../hooks';

function Groupbar() {
    const { myTeams } = useMyTeams();
    const [toggleGroups, setToggleGroups] = useState(true);
    const toggle = () => setToggleGroups(!toggleGroups);

    return (
        <VerticalBar width={toggleGroups ? '200px' : '4rem'}>
            <GroupList>
                <Icon>
                    <FiMenu onClick={toggle} />
                </Icon>
                {toggleGroups && (
                    <>
                        <List>
                            {myTeams?.map((group) => (
                                <Nav
                                    key={group.teamId}
                                    url={`/teamschedule/${group.teamId}`}
                                >
                                    <GroupName>{group.name}</GroupName>
                                </Nav>
                            ))}
                        </List>
                        <Button inverse>
                            <Nav url="/addGroup">그룹 추가하기</Nav>
                        </Button>
                    </>
                )}
            </GroupList>
        </VerticalBar>
    );
}

export default Groupbar;
