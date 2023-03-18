import { Theme } from '@emotion/react';

const theme: Theme = {
    color: {
        white: 'rgb(255, 255, 255)',
        lightPurple: 'rgb(241, 238, 255)',
        purple: 'rgb(136, 136, 247)',
        translucentPurple: 'rgba(136, 136, 247, 0.8)',
        darkPurple: 'rgb(100, 102, 255)',
        paleGrey: 'rgb(240, 242, 245)',
        lightGrey: 'rgb(220, 224, 227)',
        grey: 'rgb(155, 159, 186)',
        darkGrey: 'rgb(67,67,94)',
        darkPink: 'rgb(252, 109, 135)',
        lightPink: 'rgb(254, 240, 242)',
    },
    shadow: {
        float: 'rgba(149, 157, 165, 0.5) 0px 5px 5px',
    },
    borderRadius: {
        large: '40px',
        medium: '10px',
        round: '50%',
    },
    font: {
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
    break: {
        mobile: '@media (max-width: 650px)',
        tablet: '@media (max-width: 1024px)',
        pc: '@media (min-width: 1025px)',
    },
};

export default theme;
