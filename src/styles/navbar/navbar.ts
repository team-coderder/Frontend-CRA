import styled from '@emotion/styled/macro';

export const HorizontalBar = styled.div`
    width: 100%;
    height: 80px;

    position: sticky;
    top: 0;
    z-index: 1;
    padding-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    color: rgba(208, 214, 255, 0.7); //#d0d6ff;

    > * {
        margin-left: 10px;
    }
`;
export const Name = styled.div`
    font-size: 1.1rem;
    text-transform: uppercase;
    margin-left: 40px;
`;
export const Menu = styled.div`
    width: 300px;
    padding: 20px;

    border-radius: 10px;

    background: linear-gradient(135.32deg, rgba(93, 101, 142, 0.8) 0%, rgba(35, 39, 62, 0.8) 68.37%);
    border: 1px solid;
    border-image-source: linear-gradient(135.32deg, rgba(93, 101, 142, 0.48) 68.37%, rgba(35, 39, 62, 0) 0%);
    box-shadow: -32px -32px 48px rgba(76, 83, 118, 0.17),
        34px 34px 14px rgba(50, 54, 77, 0.48),
        inset -1px -1px 4px rgba(44, 48, 68, 0.2),
        inset 2px 2px 2px rgba(83, 92, 136, 0.11);

    > Button:first-child {
        margin-bottom: 15px;
    }
`;
