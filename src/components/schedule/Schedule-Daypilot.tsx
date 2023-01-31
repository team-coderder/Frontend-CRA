import { useRef, useEffect } from 'react';
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-react';

const Schedule = () => {
    const calendarRef = useRef();
    const newmodal = DayPilot.Modal;

    const config = {
        viewType: 'Week',
        durationBarVisible: false,
        // timeRangeSelectedHandling: 'Enabled',
        businessBeginsHour: 6,
        businessEndsHour: 24,
        heightSpec: 'BusinessHoursNoScroll',
        startDate: '2000-01-01',
        // weekStarts: 6,
        // headerDateFormat: 'dddd',
        // cellHeight: 30,
        // cellDuration: 15,
        eventDeleteHandling: 'Update',
        onTimeRangeSelected: onTimeRangeSelected,
        onEventClick: onEventClick,
    };

    async function onTimeRangeSelected(args) {
        console.log('args : ', args, args.start, args.end, args.column);
        const dp = args.control;
        // dp.update({ startDate, data });
        const modal = await newmodal.prompt(
            '생성할 스케줄 이름 : ',
            'Schedule 1',
            { theme: 'modal_rounded' },
        );
        dp.clearSelection();
        if (!modal.result) {
            return;
        }
        dp.events.add({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result,
        });
    }

    async function onEventClick(args) {
        const dp = args.control;
        const modal = await DayPilot.Modal.prompt(
            '변경할 스케줄 이름 : ',
            args.e.text(),
            { theme: 'modal_rounded' },
        );
        if (!modal.result) {
            return;
        }
        const e = args.e;
        e.data.text = modal.result;
        dp.events.update(e);
    }

    useEffect(() => {
        // if (calendarRef.current) {
        //     console.log('여기', calendarRef?.current);
        //     calendarRef.current.control!.update()
        // }
    })

    return <DayPilotCalendar ref={calendarRef} {...config} />;
};

export default Schedule;
