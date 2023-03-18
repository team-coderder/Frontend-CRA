import { useNavigate } from 'react-router';
import { Button, Nav } from '..';
import {
    ProfileName,
    NavbarComponent,
    InvisibleMob,
    Icon,
} from '../../styles/componentStyle';
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
            <InvisibleMob>
                <Button
                    width="6em"
                    height="1.5em"
                    // backgroundColor={theme.color.paleGrey}
                    // fontSize={theme.font.size.label}
                    // color={theme.color.grey}
                    onClick={handleLogOut}
                >
                    Sign Out
                </Button>
            </InvisibleMob>
            <Nav url="/myschedule">
                <ProfileName>{user?.nickname}</ProfileName>
                <Icon>{user?.nickname[0]}</Icon>
            </Nav>
        </NavbarComponent>
    );
}

export default Navbar;
