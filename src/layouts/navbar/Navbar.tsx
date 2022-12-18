import React, { useState } from 'react';
import { Modal, Button } from '../../components';
import { BsBell } from 'react-icons/bs';
import { Icon } from '../../styles/badge/badge';
import { Name, Profile, HorizontalBar, Menu } from '../../styles/navbar/navbar';
import Invitations from './Invitations';

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
                <Menu>
                    <Invitations />
                </Menu>
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
                    <Menu>
                        <Button width="8em" height="2.4em">
                            로그아웃
                        </Button>
                    </Menu>
                </Modal>
            </Profile>
        </HorizontalBar>
    );
}

export default Navbar;
