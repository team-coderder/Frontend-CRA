import styled from '@emotion/styled/macro';

export const Main = styled.main`
    max-width: 70vw;
    min-width: 900px;
    min-height: 600px;
    padding: 5rem 2rem 3rem 2rem;
    margin: auto;

    border-radius: 40px;

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // color: ${({ theme }) => theme.color.white};
    // color: #d0d6ff;
    color: #000;

    // background: radial-gradient(100% 197.75% at 0% 0%, #4D557A 5.73%, #2D324D 82.53%);
    // linear-gradient(135.32deg, rgba(93, 101, 142, 0.48) 0%, rgba(35, 39, 62, 0) 68.37%);
    // background-color: #8BC6EC;
    // background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    background: #eee;
    // background-image: linear-gradient(135deg, #ebedee 0%, #edebeb 100%);
    // border: 1px solid;
    // border-image-source: linear-gradient(135.32deg, rgba(93, 101, 142, 0.48) 68.37%, rgba(35, 39, 62, 0) 0%);

    // box-shadow: -32px -32px 48px rgba(76, 83, 118, 0.17),
    //     34px 34px 64px rgba(50, 54, 77, 0.48),
    //     inset -1px -1px 4px rgba(44, 48, 68, 0.2),
    //     inset 2px 2px 2px rgba(83, 92, 136, 0.11);
    // box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    // box-shadow: rgb(250 250 250) -10px -10px 10px 5px, rgb(150 150 150 / 30%) 10px 11px 15px 11px;
    // box-shadow: rgb(197, 208, 217) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    box-shadow: rgba(255, 255, 255, 0.5) 3px 3px 6px 0px inset, rgb(204, 219, 232) -3px -3px 6px 1px inset;
`;

export const Header = styled.header`
    margin-bottom: 50px;
    > h1 {
        font-size: 1.8rem;
    }
`;

export const Field = styled.section`
    margin-bottom: 25px;
    display: flex;
    align-items: baseline;
    > h3 {
        font-size: 1rem;
        width: 150px;
        margin-right: 50px;
        font-weight: ${({ theme }) => theme.font.weight.normal};
    }
    h4 {
        font-size: 0.8rem;
        margin-bottom: 0.7rem;
        font-weight: ${({ theme }) => theme.font.weight.normal};
        color: #9b9fba;
    }
    :last-of-type {
        margin-bottom: 0px;
    }
`;

export const AlignRight = styled.div`
    display: flex;
    justify-content: flex-end;
    > * {
        margin-left: 10px;
    }
`;

export const Icon = styled.div<{ background?: string }>`
    height: 40px;
    width: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    // background: linear-gradient(#5F6791 0%, #272C43 100%);
    // background: linear-gradient(#e0e0e0 0%, #c4c4c4 100%);
    background: #eee;
    // box-shadow: -1px -1px 3px rgb(76 83 118 / 50%),
    //     5px 5px 12px rgb(50 54 77 / 80%),
    //     inset -1px -1px 4px rgb(44 48 68 / 21%),
    //     inset 3px 2px 2px rgb(83 92 136 / 11%);
    // box-shadow: -1px -1px 3px rgb(76 83 118 / 50%),
    //     5px 5px 12px rgb(50 54 77 / 80%),
    //     inset -1px -1px 4px rgb(44 48 68 / 21%),
    //     inset 3px 2px 2px rgb(83 92 136 / 11%);
    // box-shadow: rgb(250 250 250) -5px -5px 15px 5px, rgb(150 150 150 / 30%) 5px 5px 15px 5px;
    box-shadow: rgba(255, 255, 255, 0.5) 3px 3px 6px 0px inset, rgb(204, 219, 232) -3px -3px 6px 1px inset;

    font-size: 1.2rem;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    // color: rgba(208, 214, 255, 0.7); //#d0d6ff;
    color: #1b222d;

    :hover {
        // background: linear-gradient(to bottom,  #19202b 0%,#3f4c6b 100%);
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
`;
