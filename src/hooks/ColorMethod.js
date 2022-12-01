export const generateColor = (input) => {
    const name = `${input}`;
    let hash = 0;
    for (let i = 0; i < name.length; i += 1) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i += 1) {
        const value = Math.floor(((hash >> (i * 2)) & 0xff) * 1.1);
        color += `00${value.toString(16)}`.substr(-2);
    }
    return color;
};
