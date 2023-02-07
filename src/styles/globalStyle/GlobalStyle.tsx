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
        line-height: 1;
        height: 100%;
        overflow: auto;
        background: #eee;
        color: #1b222d;
    }
    #root {
        min-height: 100%;
        margin: auto;
        display: flex;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;
