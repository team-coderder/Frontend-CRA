import { useNavigate } from 'react-router';
import { Modal, Button, Nav } from '..';
import { BsBell, BsPersonFill } from 'react-icons/bs';
import { Name, HorizontalBar, Menu } from '../../styles/componentStyle/navbar';
import { Icon } from '../../styles/globalStyle/PageLayout';
import Invitations from './Invitations';
import { useMyInfo, useToken } from '../../hooks';

function Navbar() {
    const navigate = useNavigate();
    const { user } = useMyInfo();
    const { logout } = useToken();

    const handleLogOut = () => {
        logout();
        navigate('/login');
    };

    return (
        <HorizontalBar>
            <Modal
                icon={
                    <Icon>
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
                    <Icon>
                        <BsPersonFill />
                    </Icon>
                }
            >
                <Menu>
                    <Button>
                        <Nav url="/mySchedule">내 스케쥴</Nav>
                    </Button>
                    <Button onClick={handleLogOut}>로그아웃</Button>
                </Menu>
            </Modal>
        </HorizontalBar>
    );
}

export default Navbar;
