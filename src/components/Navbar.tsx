import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Bar, Modal } from '.';
import { BsBell } from 'react-icons/bs';
import { Icon } from '../styles/Icon';

const Name = styled.div`
    height: 2rem;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-right: 10px;
`;
const Profile = styled.div`
    display: flex;
`;

const _user = {
    username: 'johnwick39856765757',
    password: 'wick1234',
    nickname: 'wick',
};

function Navbar() {
    const [toggleProfile, setToggleProfile] = useState(false);
    const [toggleAlarm, setToggleAlarm] = useState(false);

    const handleToggle = (e: React.FormEvent, label: string) => {
        if (label === 'profile') {
            setToggleProfile(!toggleProfile);
            setToggleAlarm(false);
        } else {
            setToggleAlarm(!toggleAlarm);
            setToggleProfile(false);
        }
    };
    return (
        <Bar align_end>
            <Modal
                label="alarm"
                icon={
                    <Icon>
                        <BsBell />
                    </Icon>
                }
                toggle={toggleAlarm}
                handleToggle={handleToggle}
            >
                내부
            </Modal>
            <Profile>
                <Name>{_user.nickname}</Name>
                <Modal
                    label="profile"
                    icon={
                        <Icon background-color="#93c47d">
                            {_user.nickname[0].toUpperCase()}
                        </Icon>
                    }
                    toggle={toggleProfile}
                    handleToggle={handleToggle}
                >
                    <button>로그아웃</button>
                </Modal>
            </Profile>
        </Bar>
    );
}

export default Navbar;
