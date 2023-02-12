import styled from '@emotion/styled/macro';

export const Container = styled.div`
    margin: auto;
    padding: 0 30px 30px 200px;
`;
export const Flex = styled.div`
    display: flex;
    position: relative;
`;

/* Groupbar
 */
export const VerticalBar = styled.div<{ width: string }>`
    height: 100%;
    width: ${({ width }) => width};
    padding: 10px;
    position: absolute;
    left: calc(-1 * ${({ width }) => width});
`;
export const GroupList = styled.div`
    position: sticky;
    top: 3rem;
    height: min(100%, 80vh);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: calc(100% - 4rem);
    overflow: auto;
    margin: 10px 0;
`;
export const GroupName = styled.div`
    height: 3em;
    padding: 1em 0.5em;
    font-size: ${({ theme }) => theme.font.size.label};
    white-space: nowrap;
    overflow: hidden;
`;

/* Navbar
 */
export const HorizontalBar = styled.div`
    width: 100%;
    height: 80px;
    // position: sticky;
    // top: 0;
    z-index: 1;
    position: relative;
    padding-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > * {
        margin-left: 10px;
    }
`;
export const Name = styled.div`
    text-transform: uppercase;
    margin-left: 40px;
`;
export const Menu = styled.div`
    padding: 15px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background: ${({ theme }) => theme.color.background.tan.main};
    & > Button:first-of-type {
        margin-bottom: 10px;
    }
`;

/* Invitations
 */
export const InvitationsContainer = styled.div`
    width: 270px;
`;

export const NoticeText = styled.div`
    color: ${({ theme }) => theme.font.color.sub};
    font-size: ${({ theme }) => theme.font.size.label};
    display: flex;
    justify-content: center;
    :not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr 1fr;
    gap: 10px;
`;

export const InviteName = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
