import { css, Global } from '@emotion/react';
import React from 'react';
import theme from '../theme';

export default function GlobalStyle() {
    return (
        <>
            <Global styles={reset} />
            <Global styles={modal} />
        </>
    );
}

const reset = css`
    /* 
       http://meyerweb.com/eric/tools/css/reset/ 
       v2.0 | 20110126
       License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* 
       https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/
       Change Autocomplete styles in Chrome
    */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: #fff;
        -webkit-box-shadow: none;
        transition: background-color 5000s ease-in-out 0s;
    }

    /*
       Coderder
    */
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
