import { useRef, useCallback, memo } from 'react';
import { createPortal } from 'react-dom';
import { useDialogStore, useDialog } from '../../hooks';
import '../../styles/componentStyle/dialog.css';
/* 해당 컴포넌트는 다음 글을 참고했습니다: https://marshallku.com/web/tips/react%EC%97%90%EC%84%9C-dialog-%EB%A7%8C%EB%93%A4%EA%B8%B0 */

const Dialog = () => {
    const dialogRoot = document.querySelector('#dialog') as HTMLElement;
    const inputRef = useRef<HTMLInputElement>(null);
    const { revealed, title, description, type, Child } = useDialogStore();
    const { onInteractionEnd } = useDialog();

    const handleConfirmClick = useCallback(() => {
        if (type === 'prompt') {
            onInteractionEnd(inputRef.current?.value || '');
            return;
        }
        onInteractionEnd(true);
    }, [type, onInteractionEnd]);

    const handleCancelClick = useCallback(() => {
        if (type === 'prompt') {
            onInteractionEnd('');
            return;
        }
        onInteractionEnd(false);
    }, [type, onInteractionEnd]);

    const DialogComponent = memo(() => (
        <>
            <div className="dialog-backdrop" onClick={handleCancelClick} />
            <section className="dialog">
                <h2 className="dialog__title">{title}</h2>
                {description && (
                    <p className="dialog__description">{description}</p>
                )}
                {type === 'prompt' && (
                    <form onSubmit={handleConfirmClick}>
                        <input
                            autoFocus
                            type="text"
                            className="dialog__input"
                            ref={inputRef}
                        />
                    </form>
                )}
                {type === 'show' ? (
                    Child
                ) : (
                    <div className="dialog__buttons">
                        <button
                            type="button"
                            className="dialog__button dialog__button--confirm"
                            onClick={handleConfirmClick}
                        >
                            OK
                        </button>
                        {type !== 'alert' && (
                            <button
                                type="button"
                                className="dialog__button dialog__button--cancel"
                                onClick={handleCancelClick}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                )}
            </section>
        </>
    ));

    return createPortal(revealed ? <DialogComponent /> : null, dialogRoot);
};

export default Dialog;
