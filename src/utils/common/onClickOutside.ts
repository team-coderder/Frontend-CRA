export const onClickOutside = (
    event: MouseEvent,
    ref: React.RefObject<HTMLElement>,
    handler: () => void,
): void => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
    }
};
