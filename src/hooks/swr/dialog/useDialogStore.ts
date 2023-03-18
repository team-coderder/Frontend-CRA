import useSWR from 'swr';
import type { DialogStore } from '../../../types';

let store = <DialogStore>{
    title: '',
    description: '',
    type: 'alert',
    revealed: false,
    responseHandler: () => {
        return;
    },
    child: null,
};

const useDialogStore = () => {
    const { data: title, mutate: mutateTitle } = useSWR(
        'useDialogTitle',
        () => store.title,
    );
    const { data: description, mutate: mutateDesc } = useSWR(
        'useDialogDesc',
        () => store.description,
    );
    const { data: type, mutate: mutateType } = useSWR(
        'useDialogType',
        () => store.type,
    );
    const { data: revealed, mutate: mutateRevealed } = useSWR(
        'useDialogRevealed',
        () => store.revealed,
    );
    const { data: responseHandler, mutate: mutateResponse } = useSWR(
        'useDialogResponse',
        () => store.responseHandler,
    );
    const { data: Child, mutate: mutateChild } = useSWR(
        'useDialogChild',
        () => store.child,
    );

    return {
        title,
        setTitle: (title: string) => {
            // store.title = title;
            store = { ...store, title: title };
            return mutateTitle();
        },
        description,
        setDescription: (description: string) => {
            store = { ...store, description: description };
            return mutateDesc();
        },
        type,
        setType: (type: string) => {
            store = { ...store, type: type };
            return mutateType();
        },
        revealed,
        setRevealed: (revealed: boolean) => {
            store = { ...store, revealed: revealed };
            return mutateRevealed();
        },
        responseHandler,
        setResponseHandler: (responseHandler) => {
            store = { ...store, responseHandler: responseHandler };
            return mutateResponse();
        },
        Child,
        setChild: (child: React.ReactNode) => {
            store = { ...store, child: child };
            return mutateChild();
        },
    };
};

export default useDialogStore;
