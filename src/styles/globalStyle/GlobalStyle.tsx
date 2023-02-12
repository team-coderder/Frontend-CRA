import { css, Global } from '@emotion/react';

export default function GlobalStyle() {
    return (
        <>
            <Global styles={reset} />
        </>
    );
}

const reset = css`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html,
    input,
    body {
        font-family: 'Spoqa Han Sans Neo';
        height: 100%;
        overflow: auto;
        background: #eeeeee;
        color: #1b222d;
    }
    #root {
        min-height: 100%;
        margin: auto;
        display: flex;
    }
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background: #c1c9d6;
    }
`;
