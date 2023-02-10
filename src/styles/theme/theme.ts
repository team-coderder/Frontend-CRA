import { Theme } from '@emotion/react';

const theme: Theme = {
    color: {
        background: {
            light: {
                main: '#EEEEEE',
                hover: '#DDDDDD',
                shadow: {
                    convex: 'rgb(255 255 255 / 50%) 3px 3px 6px 0px inset, rgb(204 219 232) -3px -3px 6px 1px inset',
                    concave: 'rgb(204 219 232) 3px 3px 6px 0px inset, rgb(255 255 255 / 50%) -3px -3px 6px 1px inset',
                },
            },
            dark: {
                main: '#1B222D',
                hover: '#090B0F',
                shadow: {
                    convex: 'rgb(135 160 199 / 50%) 3px 3px 6px 0px inset, rgb(13 16 20) -3px -3px 6px 1px inset',
                },
            },
        },
    },
    borderRadius: {
        large: '40px',
        medium: '10px',
    },

    font: {
        color: {
            main: {
                dark: '#1B222D',
                light: '#EEEEEE',
            },
            sub: '#9B9FBA',
            warning: '#F8623F',
        },
        size: {
            header: '1.8rem',
            base: '1rem',
            label: '0.8rem',
        },
        weight: {
            bold: 700,
            normal: 400,
        },
    },
};

export default theme;
