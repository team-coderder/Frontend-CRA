import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            background: {
                light: {
                    main: string;
                    hover: string;
                    shadow: {
                        convex: string;
                        concave: string;
                    };
                };
                dark: {
                    main: string;
                    hover: string;
                    shadow: {
                        convex: string;
                    };
                };
            };
        };
        borderRadius: {
            large: string;
            medium: string;
        };

        font: {
            color: {
                main: {
                    dark: string;
                    light: string;
                };
                sub: string;
                warning: string;
            };
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
    }
}
