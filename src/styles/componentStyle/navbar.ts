import styled from '@emotion/styled/macro';
import { Icon } from '.';

const NavbarComponent = styled.div`
    width: 100%;
    height: 60px;
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    * Button {
        margin-right: 20px;
    }
    :hover {
        ${Icon} {
            background-color: ${({ theme }) => theme.color.darkPurple};
            transition: 0.5s all;
        }
    }
`;
const ProfileName = styled.div`
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
`;

export { NavbarComponent, ProfileName };
