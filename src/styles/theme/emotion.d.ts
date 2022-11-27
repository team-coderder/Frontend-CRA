import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            main: {
                dark: string;
                common: string;
                light: string;
            };
            sub: {
                common: string;
                light: string;
            };
            black: string;
            white: string;
            gray: string;
            warning: string;
            success: string;
        };
        font: {
            weight: {
                bold: number;
                normal: number;
                thin: number;
            };
            size: {
                large: number;
                medium: number;
                small: number;
            };
        };
        borderRadius: {
            large: string;
            medium: string;
            small: string;
        };
    }
}
