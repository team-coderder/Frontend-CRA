import React, { useState } from 'react';
import { Bar } from '.';
import { FiMenu } from 'react-icons/fi';
import { Icon } from '../styles/Icon';
import styled from '@emotion/styled';

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

const GroupName = styled.div`
    text-align: center;
`;

function Groupbar() {
    const [toggleGroups, setToggleGroups] = useState(false);
    const toggle = () => setToggleGroups(!toggleGroups);

    return (
        <Bar
            vertical
            breadth={toggleGroups ? '15rem' : '4rem'}
            margin="4rem 0 0 0"
        >
            <Icon>
                <FiMenu onClick={toggle} />
            </Icon>
            {_groups.map((group, index) => (
                <GroupName key={index}>
                    <Icon>{group.teamId}</Icon>
                    {toggleGroups && group.name}
                </GroupName>
            ))}
        </Bar>
    );
}

export default Groupbar;
