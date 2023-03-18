import styled from '@emotion/styled/macro';

/* Groupbar
 */
const GroupbarComponent = styled.div<{ width: string }>`
    height: 100%;
    width: ${({ width }) => width};
    padding: 10px;
    position: absolute;
    left: calc(-1 * ${({ width }) => width});
`;
const GroupList = styled.div`
    position: sticky;
    top: 3rem;
    height: min(100%, 80vh);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
const GroupsComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: calc(100% - 4rem);
    overflow: auto;
    margin: 10px 0;
`;
const GroupName = styled.div`
    height: 3em;
    padding: 1em 0.5em;
    font-size: ${({ theme }) => theme.font.size.label};
    white-space: nowrap;
    overflow: hidden;
`;

/* Navbar
 */
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
const ModalContent = styled.div`
    padding: 15px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background: ${({ theme }) => theme.color.background.tan.main};
    & > Button:first-of-type {
        margin-bottom: 10px;
    }
`;

/* Invitations
 */
const InvitationsComponent = styled.div`
    width: 270px;
`;
const InvitationsGrid = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr 1fr;
    gap: 10px;
`;
const InvitationName = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export {
    GroupbarComponent,
    GroupList,
    GroupsComponent,
    GroupName,
    InvitationsComponent,
    InvitationsGrid,
    InvitationName,
    NavbarComponent,
    ProfileName,
    ModalContent,
};
