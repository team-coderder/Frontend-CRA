import { css, Global } from '@emotion/react';
import React from 'react';
import theme from '../theme';
import { mainCSS } from './mainSchedule';
import { modal } from './modal';

export default function GlobalStyle() {
    return (
        <>
            <Global styles={reset} />
            <Global styles={modal} />
            <Global styles={mainCSS} />
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
        background-color: #84d3ec;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;
