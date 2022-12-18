import React, { useState } from 'react';
import { Modal } from '../../components';
import { BsBell } from 'react-icons/bs';
import { Icon } from '../../styles/icon/icon';
import { Name, Profile, HorizontalBar } from '../../styles/navbar/navbar';

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
        <HorizontalBar>
            <Modal
                label="alarm"
                icon={
                    <Icon background="pink">
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
                        <Icon background="#93c47d">
                            {_user.nickname[0].toUpperCase()}
                        </Icon>
                    }
                    toggle={toggleProfile}
                    handleToggle={handleToggle}
                >
                    <button>로그아웃</button>
                </Modal>
            </Profile>
        </HorizontalBar>
    );
}

export default Navbar;
