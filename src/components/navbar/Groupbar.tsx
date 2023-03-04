import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Button, Nav } from '..';
import Groups from './Groups';
import { VerticalBar, GroupList } from '../../styles/componentStyle/navbar';
import { Icon } from '../../styles/globalStyle/PageLayout';

function Groupbar() {
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
                        <Groups />
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
