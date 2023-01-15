import { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled/macro';

type ModalProps = {
    icon: React.ReactNode;
    children?: React.ReactNode;
};

const ModalContainer = styled.div`
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
        const closeModal = (e) => {
            if (
                isOpen &&
                (!modalRef.current || !modalRef.current.contains(e.target))
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', closeModal);

        return () => document.removeEventListener('click', closeModal);
    }, [isOpen]);

    const openModal = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    };

    return (
        <ModalContainer onClick={openModal} ref={modalRef}>
            {icon}
            {isOpen && <ToggleMenu>{children}</ToggleMenu>}
        </ModalContainer>
    );
};

export default Modal;
