import { css, Global } from '@emotion/react';

export default function GlobalStyle() {
    return (
        <>
            <Global styles={reset} />
            <Global styles={scheduleStyle} />
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
const scheduleStyle = css`
    :root {
        --fc-event-border-color: 'transparent';
        --fc-page-bg-color: 'transparent';
        --fc-event-bg-color: rgba(199, 165, 129, 0.8);
    }
    .fc-timegrid-event-harness {
        padding: 1px 5px;
        overflow: hidden;
        word-break: break-word;
    }
    .tooltip {
        display: none;
        position: fixed;
        white-space: pre;
        border-radius: 10px;
        padding: 5px;
        font-size: 0.8em;
        color: white;
        background: #1b222d; /*deeppink;*/
        z-index: 1;
    }
    .tooltip.show {
        display: block;
    }
`;
