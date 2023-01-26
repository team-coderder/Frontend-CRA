import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Button, Nav } from '..';
import {
    VerticalBar,
    GroupList,
    GroupName,
    Bottom,
    List,
} from '../../styles/navbar/groupbar';
import { Icon } from '../../styles/globalStyle/PageLayout';
import { useMyTeams } from '../../hooks';

function Groupbar() {
    const { myTeams } = useMyTeams();
    const [toggleGroups, setToggleGroups] = useState(false);
    const toggle = () => setToggleGroups(!toggleGroups);

    return (
        <VerticalBar width={toggleGroups ? '15rem' : '4rem'}>
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
                                    weight="normal"
                                >
                                    <GroupName>
                                        {toggleGroups
                                            ? group.name
                                            : group.name[0]}
                                    </GroupName>
                                </Nav>
                            ))}
                        </List>
                        <Bottom>
                            <Button>
                                <Nav url="/addGroup" size="medium" fill center>
                                    그룹 추가하기
                                </Nav>
                            </Button>
                        </Bottom>
                    </>
                )}
            </GroupList>
        </VerticalBar>
    );
}

export default Groupbar;
