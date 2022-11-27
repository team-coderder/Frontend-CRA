import { Theme } from '@emotion/react';

const theme: Theme = {
    color: {
        main: {
            dark: '#287CC0',
            common: '#84D3EC',
            light: '#BDE1EC',
        },
        sub: {
            common: '#F5E299',
            light: '#FFF0B6',
        },
        black: '#000000',
        white: '#F7F7F7',
        gray: '#D3D3D3',
        warning: '#F8623F',
        success: '#06FC6A',
    },

    font: {
        weight: {
            bold: 600,
            normal: 400,
            thin: 200,
        },
        size: {
            large: 55,
            medium: 16,
            small: 12,
        },
    },
    borderRadius: {
        large: '20px',
        medium: '10px',
        small: '5px',
    },
};

export default theme;

// theme 추가 사항 필요
