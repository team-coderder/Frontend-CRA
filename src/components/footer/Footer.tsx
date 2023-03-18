import { useNavigate } from 'react-router';
import { Button } from '..';
import { useToken } from '../../hooks';
import { FooterComponent, InvisiblePC } from '../../styles/componentStyle';
import theme from '../../styles/theme';

function Footer() {
    const navigate = useNavigate();
    const { logout } = useToken();

    const handleLogOut = () => {
        logout();
        navigate('/login');
    };

    return (
        <InvisiblePC>
            <FooterComponent>
                <Button
                    width="6em"
                    height="1.5em"
                    backgroundColor={theme.color.paleGrey}
                    fontSize={theme.font.size.label}
                    color={theme.color.grey}
                    onClick={handleLogOut}
                >
                    Sign Out
                </Button>
            </FooterComponent>
        </InvisiblePC>
    );
}

export default Footer;
