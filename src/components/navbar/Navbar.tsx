import { Modal, Button } from '..';
import { BsBell } from 'react-icons/bs';
import { Icon } from '../../styles/badge/badge';
import { Name, HorizontalBar, Menu } from '../../styles/navbar/navbar';
import Invitations from './Invitations';

const _user = {
    username: 'johnwick39856765757',
    password: 'wick1234',
    nickname: 'wick',
};

function Navbar() {
    return (
        <HorizontalBar>
            <Modal
                icon={
                    <Icon background="pink">
                        <BsBell />
                    </Icon>
                }
            >
                <Menu>
                    <Invitations />
                </Menu>
            </Modal>
            <Name>{_user.nickname}</Name>
            <Modal
                icon={
                    <Icon background="#93c47d">
                        {_user.nickname[0].toUpperCase()}
                    </Icon>
                }
            >
                <Menu>
                    <Button width="8em" height="2.4em">
                        내 스케쥴
                    </Button>
                    <Button width="8em" height="2.4em">
                        로그아웃
                    </Button>
                </Menu>
            </Modal>
        </HorizontalBar>
    );
}

export default Navbar;
