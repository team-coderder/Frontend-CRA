import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Icon } from '../../styles/badge/badge';
import { Button, Nav } from '../../components';
import {
    VerticalBar,
    GroupList,
    GroupName,
    Bottom,
} from '../../styles/navbar/groupbar';

const _groups = [
    {
        teamId: 2,
        name: '서울 9조',
    },
    {
        teamId: 3,
        name: '코테스터디 Algogazaa',
    },
    {
        teamId: 1,
        name: 'coderder',
    },
    {
        teamId: 19,
        name: '사이드프로젝트',
    },
];

function Groupbar() {
    const [toggleGroups, setToggleGroups] = useState(false);
    const toggle = () => setToggleGroups(!toggleGroups);

    return (
        <VerticalBar width={toggleGroups ? '15rem' : '4rem'}>
            <GroupList>
                <Icon>
                    <FiMenu onClick={toggle} />
                </Icon>
                {_groups.map((group, index) => (
                    <GroupName key={index}>
                        {toggleGroups ? group.name : group.name[0]}
                    </GroupName>
                ))}
                <Bottom>
                    {toggleGroups && (
                        <Button>
                            <Nav url="/addGroup" size="medium" fill>
                                그룹 추가하기
                            </Nav>
                        </Button>
                    )}
                </Bottom>
            </GroupList>
        </VerticalBar>
    );
}

export default Groupbar;
