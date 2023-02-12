import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Button, Nav } from '..';
import Groups from './Groups';
import { VerticalBar, GroupList, Bottom } from '../../styles/navbar/groupbar';
import { Icon } from '../../styles/globalStyle/PageLayout';

function Groupbar() {
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
                        <Groups />
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
