import { useNavigate } from 'react-router';
import { Modal, Button, Nav } from '..';
import { BsBell, BsPersonFill } from 'react-icons/bs';
import {
    ProfileName,
    NavbarComponent,
    ModalContent,
    Icon,
} from '../../styles/componentStyle';
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
        <NavbarComponent>
            <Modal
                icon={
                    <Icon>
                        <BsBell />
                    </Icon>
                }
            >
                <ModalContent>
                    <Invitations />
                </ModalContent>
            </Modal>
            <ProfileName>{user?.nickname}</ProfileName>
            <Modal
                icon={
                    <Icon>
                        <BsPersonFill />
                    </Icon>
                }
            >
                <ModalContent>
                    <Button>
                        <Nav url="/mySchedule">내 스케쥴</Nav>
                    </Button>
                    <Button onClick={handleLogOut}>로그아웃</Button>
                </ModalContent>
            </Modal>
        </NavbarComponent>
    );
}

export default Navbar;
