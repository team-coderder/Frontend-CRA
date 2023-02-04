import { WEEK_START, WEEK_END } from '../../constant';
import { EventApi, CalendarApi } from '@fullcalendar/core';

/* 추가해도 되는 일정인지 확인한다.
 */
export function isEventAllowed(
    start: string,
    end: string,
    calendarApi: CalendarApi,
    events: EventApi[],
) {
    calendarApi.unselect();

    if (events.length > 126 * 2) {
        alert('등록한 일정이 너무 많습니다');
        return false;
    }
    if (
        start < WEEK_START ||
        end > WEEK_END ||
        (start.split(/[T+]/)[0] !== end.split(/[T+]/)[0] &&
            end.split(/[T+]/)[1] !== '00:00:00')
    ) {
        console.log(start, end, end.split(/[T+]/)[1])
        alert('날짜를 넘어가는 스케쥴은 등록할 수 없습니다');
        return false;
    }
    if (events.length && _isOverlap(events, start, end)) {
        alert('겹치는 스케쥴은 등록할 수 없습니다');
        return false;
    }
    return true;
}

/* 추가할 일정이 기존 일정과 겹치는 구간이 있는지 확인한다.
 * 이벤트 리스트를 받아, 쉬운 비교를 위해 분으로 환산하고 정렬한다.
 * 이분탐색으로 추가할 일정의 위치를 파악하고
 * 앞뒤 일정의 범위와 비교한다.
 */
function _isOverlap(events: EventApi[], start: string, end: string) {
    const eventsInMin: number[][] = [];
    events.forEach((event) => {
        eventsInMin.push([
            _convertToMinutes(event.startStr),
            _convertToMinutes(event.endStr),
        ]);
    });
    eventsInMin.sort((a, b) => a[0] - b[0]);

    const startInMin = _convertToMinutes(start);
    const endInMin = _convertToMinutes(end);

    const idx = _binSearchGTE(eventsInMin, startInMin);

    if (idx === -1) {
        if (eventsInMin[eventsInMin.length - 1][1] > startInMin) return true;
    } else if (idx === 0) {
        if (eventsInMin[idx][0] < endInMin) return true;
    } else {
        if (
            eventsInMin[idx][0] < endInMin ||
            eventsInMin[idx - 1][1] > startInMin
        )
            return true;
    }
    return false;
}

/* 'yyyy-mm-ddTHH:MM:SS+09:00' 포맷의 시간 문자열을 받아 분으로 환산한다.
 */
function _convertToMinutes(dateTime: string) {
    const [date, time] = dateTime.split(/[T+]/);
    const [, , day] = date.split('-');
    const [hour, minute] = time.split(':');
    return Number(day) * 1440 + Number(hour) * 60 + Number(minute);
}

/* Greater than or Equal to 이분탐색.
 * item[0]이 target과 같거나 큰 첫번째 item의 인덱스 리턴.
 * 없다면 (즉, 배열 내 가장 큰 item[0]도 target보다 작다면) -1 리턴.
 */
function _binSearchGTE(originalArr: number[][], target: number) {
    const MIN = Number.MIN_SAFE_INTEGER;
    const arr = [[MIN, MIN], ...originalArr];
    let start = 1;
    let end = arr.length;

    while (start <= end) {
        const mid = ~~((start + end) / 2);
        if (mid >= arr.length) {
            return -1;
        }
        if (arr[mid][0] >= target && arr[mid - 1][0] < target) {
            return mid - 1; // 0번째에 MIN을 넣었으니까
        } else if (target < arr[mid][0]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}
