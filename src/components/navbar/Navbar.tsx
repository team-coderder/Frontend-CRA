import { useNavigate } from 'react-router';
import { Modal, Button, Nav } from '..';
import { BsBell } from 'react-icons/bs';
import { Icon } from '../../styles/badge/badge';
import { Name, HorizontalBar, Menu } from '../../styles/navbar/navbar';
import Invitations from './Invitations';
import { useMyInfo } from '../../hooks';

function Navbar() {
    const navigate = useNavigate();
    const { user, logOut } = useMyInfo();

    const handleLogOut = () => {
        logOut();
        navigate('/login');
    };

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
            <Name>{user?.nickname}</Name>
            <Modal
                icon={
                    <Icon background="#93c47d">
                        {user?.nickname[0].toUpperCase()}
                    </Icon>
                }
            >
                <Menu>
                    <Button width="8em" height="2.4em">
                        <Nav url="/mySchedule" size="medium" center>
                            내 스케쥴
                        </Nav>
                    </Button>
                    <Button width="8em" height="2.4em" onClick={handleLogOut}>
                        로그아웃
                    </Button>
                </Menu>
            </Modal>
        </HorizontalBar>
    );
}

export default Navbar;
