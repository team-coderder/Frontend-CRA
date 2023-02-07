import { css, Global } from '@emotion/react';

export default function GlobalStyle() {
    return (
        <>
            <Global styles={reset} />
            <Global styles={modal} />
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
        // background: linear-gradient(119.36deg, #464C6E 0%, #272B45 100%);
        // background: linear-gradient(119.36deg, #30cfd0 0%, #330867 100%);
        // background: #0082c8;
        // background: linear-gradient(119.36deg, #eeaeca 0%, #94bbe9 100%);
        // background-color: #D9AFD9;
        // background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
        background: #eee;
    }
    #root {
        min-height: 100%;
        margin: auto;
        display: flex;
        // justify-content: center;
        // align-items: center;
        // overflow: auto;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

const modal = css`
    .modal_rounded_background {
        background-color: #000;
        opacity: 0.75;
    }
    .modal_rounded_main {
        border-radius: 4px;
    }
    .modal_rounded_main,
    .modal_rounded_main input,
    .modal_rounded_main button {
        font-size: 14px;
    }
    .modal_rounded_inner {
        padding: 20px;
        background: #fff;
        color: #000;
        border-radius: 8px;
    }
    .modal_rounded_main input,
    .modal_rounded_main button {
        padding: 5px;
        box-sizing: border-box;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
    .modal_rounded_content {
        margin: 10px 0px;
    }
    .modal_rounded_input {
        margin: 20px 0px;
    }
    .modal_rounded_buttons {
        margin-top: 30px;
        margin-bottom: 10px;
    }
    .modal_rounded_main button {
        background-color: #2367bf;
        color: white;
        padding: 10px 0px;
        border: 0px;
        cursor: pointer;
        outline: none;
        width: 100px;
    }
    button.modal_rounded_cancel {
        margin-left: 10px;
        border: 1px solid #2367bf;
        background-color: #fff;
        color: #2367bf;
    }
`;
