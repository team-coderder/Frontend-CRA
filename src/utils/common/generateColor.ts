import randomColor from 'randomcolor';

export const generateColor = (input) => {
    return randomColor({
        seed: input,
        luminosity: 'light',
    });
};

// function custom_generateColor(input) {
//     const id = `${input}`;
//     let hash = 0;
//     for (let i = 0; i < id.length; i += 1) {
//         hash = id.charCodeAt(i) + ((hash << 5) - hash);
//     }
//     let colour = '#';
//     for (let i = 0; i < 3; i += 1) {
//         const value = Math.floor(((hash >> (i * 8)) & 0xff) * 0.8);
//         colour += `00${value.toString(16)}`.substr(-2);
//     }
//     return colour;
// }
