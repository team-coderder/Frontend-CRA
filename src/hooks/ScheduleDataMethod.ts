interface eType {
    id?: string;
    start?: any;
    end?: any;
    text?: string;
}

const showData: eType[] = [];

export const updateSchedule = (data, name) => {
    const filteredData = data.filter((event) => {
        if (event.id.includes(name)) {
            console.log(`${name}s` + `Event!`, event.id);
            showData.push(event);
        }
        event.id.includes(name);
    });

    console.log('showData: ', showData);
};
