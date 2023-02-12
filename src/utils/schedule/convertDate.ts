import { START_DATE } from '../../constant';

const weekdays = {
    MON: 0,
    TUE: 1,
    WED: 2,
    THU: 3,
    FRI: 4,
    SAT: 5,
    SUN: 6,
    0: 'MON',
    1: 'TUE',
    2: 'WED',
    3: 'THU',
    4: 'FRI',
    5: 'SAT',
    6: 'SUN',
};

export function generateDateFromString(data: string) {
    // WED+12:30:00 -> new Date('1995-12-17T12:30:00');
    const result = new Date(START_DATE + 'T' + data.split('+')[1]);
    result.setDate(result.getDate() + weekdays[data.split('+')[0]]);
    return result;
}

export function generateStringFromDate(data: Date) {
    // Tue Jan 03 2023 14:00:00 GMT+0900 (한국 표준시) -> WED+12:30:00
    let result = '';
    result += weekdays[data.getDate() - Number(START_DATE.split('-')[2])];
    result += '+' + data.toTimeString().split(' ')[0];
    return result;
}
