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
        font-family: 'Noto Sans', sans-serif;
        height: 100%;
        overflow: auto;
        background: rgb(255, 255, 255);
        color: rgb(70, 70, 98);
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
        background: rgb(193, 201, 214);
    }
`;
const scheduleStyle = css`
    :root {
        --fc-event-border-color: 'transparent';
        --fc-page-bg-color: 'transparent';
        --fc-event-bg-color: rgba(136, 136, 247, 0.8);
    }
    .fc-timegrid-event-harness {
        overflow: hidden;
        word-break: break-word;
    }
    .fc-timegrid-event-harness > .fc-timegrid-event {
        padding: 3px 5px;
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
