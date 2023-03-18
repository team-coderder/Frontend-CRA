import { useEffect, useState, useRef } from 'react';
import { onClickOutside } from '../../utils';
import type { ModalProps } from '../../types';
import { ModalComponent, ToggleMenu } from '../../styles/componentStyle';

const Modal = ({ icon, children }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const closeModal = (e: MouseEvent) => {
            onClickOutside(e, modalRef, () => setIsOpen(false));
        };
        document.addEventListener('click', closeModal);
        return () => document.removeEventListener('click', closeModal);
    }, []);

    const toggleModal = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <ModalComponent ref={modalRef}>
            <div onClick={toggleModal}>{icon}</div>
            {isOpen && <ToggleMenu>{children}</ToggleMenu>}
        </ModalComponent>
    );
};

export default Modal;
