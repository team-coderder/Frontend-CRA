import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            white: string;
            lightPurple: string;
            purple: string;
            translucentPurple: string;
            darkPurple: string;
            paleGrey: string;
            lightGrey: string;
            grey: string;
            darkGrey: string;
            darkPink: string;
            lightPink: string;
        };
        shadow: {
            float: string;
        };
        borderRadius: {
            large: string;
            medium: string;
            round: string;
        };
        font: {
            size: {
                header: string;
                base: string;
                label: string;
            };
            weight: {
                bold: number;
                normal: number;
            };
        };
        break: {
            mobile: string;
            tablet: string;
            pc: string;
        };
    }
}
