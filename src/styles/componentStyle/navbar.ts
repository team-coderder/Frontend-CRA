import styled from '@emotion/styled/macro';

const NavbarComponent = styled.div`
    width: 100%;
    height: 80px;
    // position: sticky;
    // top: 0;
    z-index: 3;
    position: relative;
    padding-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > * {
        margin-left: 10px;
    }
`;
const ProfileName = styled.div`
    text-transform: uppercase;
    margin-left: 40px;
`;

export { NavbarComponent, ProfileName };
