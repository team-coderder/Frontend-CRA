export function setInset(cnt: number | undefined) {
    if (cnt) {
        const fraction = ~~((1 / cnt) * 100);
        const events = Array.from(document.getElementsByClassName('fc-timegrid-event-harness') as HTMLCollectionOf<HTMLElement>);
        events.forEach((e) => {
            const index = Array.from((e.childNodes[0] as Element).classList).find(c => /^index-\d+$/.test(c));
            if (index) {
                const idx = Number(index.split('-')[1]);
                const insets = e.style.inset.split(' ');
                insets[1] = fraction * (cnt - idx - 1) + '%';
                insets[3] = fraction * idx + '%';
                e.style.inset = insets.join(' ');
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
