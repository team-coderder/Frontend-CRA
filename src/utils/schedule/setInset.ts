export function setInset(cnt: number | undefined) {
    if (cnt) {
        const fraction = ~~((1 / cnt) * 100);
        const events = document.getElementsByClassName('fc-timegrid-event-harness') as HTMLCollectionOf<HTMLElement>;
        Array.from(events).forEach((e) => {
            const classes = Array.from((e.childNodes[0] as Element).classList);
            if (classes.includes('team-event')) {
                const insets = e.style.inset.split(' ');
                insets[1] = '0%';
                insets[3] = '0%';
                e.style.inset = insets.join(' ');
                e.style.zIndex = '2';
            } else {
                const index = classes.find(c => /^index-\d+$/.test(c));
                if (index) {
                    const idx = Number(index.split('-')[1]);
                    const insets = e.style.inset.split(' ');
                    insets[1] = fraction * (cnt - idx - 1) + '%';
                    insets[3] = fraction * idx + '%';
                    e.style.inset = insets.join(' ');
                    e.style.zIndex = '1';
                }
            }
            // else {
            //     const insets = e.style.inset.split(' ');
            //     insets[1] = '0%';
            //     insets[3] = '0%';
            //     e.style.inset = insets.join(' ');
            // }
        });
    }
}
