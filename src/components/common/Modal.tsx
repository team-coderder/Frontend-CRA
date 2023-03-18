import { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { onClickOutside } from '../../utils';
import type { ModalProps } from '../../types';

const ModalComponent = styled.div`
    position: relative;
`;

const ToggleMenu = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
`;

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
