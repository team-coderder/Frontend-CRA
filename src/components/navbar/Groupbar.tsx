import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Button, Nav } from '..';
import Groups from './Groups';
import {
    GroupbarComponent,
    GroupList,
    Icon,
} from '../../styles/componentStyle';

function Groupbar() {
    const [toggleGroups, setToggleGroups] = useState(true);
    const toggle = () => setToggleGroups(!toggleGroups);

    return (
        <GroupbarComponent width={toggleGroups ? '200px' : '4rem'}>
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
        </GroupbarComponent>
    );
}

export default Groupbar;
