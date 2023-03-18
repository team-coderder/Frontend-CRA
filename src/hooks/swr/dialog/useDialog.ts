import { useDialogStore } from '../..';
import type { DialogType } from '../../../types';

const useDialog = () => {
    const {
        setTitle,
        setDescription,
        setRevealed,
        setType,
        responseHandler,
        setResponseHandler,
        setChild,
    } = useDialogStore();

    const onInteractionEnd = (value: string | boolean) => {
        setRevealed(false);
        responseHandler?.(value);
        setTitle('');
        setDescription('');
    };

    const setAttributes = (
        type: DialogType,
        title: string,
        description: string,
        child?: React.ReactNode,
    ) => {
        setRevealed(true);
        setTitle(title);
        setDescription(description);
        setType(type);
        setChild(child);
    };

    const show = (
        title: string,
        description = '',
        child: React.ReactNode = null,
    ) => {
        setAttributes('show', title, description, child);
        return new Promise<boolean>((res) => {
            setResponseHandler(res);
        });
    };

    const confirm = (title: string, description = '') => {
        setAttributes('confirm', title, description);
        return new Promise<boolean>((res) => {
            setResponseHandler(res);
        });
    };

    const alert = (title: string, description = '') => {
        setAttributes('alert', title, description);
        return new Promise<boolean>((res) => {
            setResponseHandler(res);
        });
    };

    const prompt = (title: string, description = '') => {
        setAttributes('prompt', title, description);
        return new Promise<string>((res) => {
            setResponseHandler(res);
        });
    };

    return {
        show,
        confirm,
        alert,
        prompt,
        onInteractionEnd,
    };
};

export default useDialog;
