import React from 'react';
import styled from '@emotion/styled';

interface Props {
    label: string;
    icon: React.ReactNode;
    expandRight?: boolean;
    toggle?: boolean;
    handleToggle?: (e: React.FormEvent, id: string) => void;
    children?: React.ReactNode;
}

const Modal = ({
    label,
    icon,
    expandRight,
    toggle,
    handleToggle,
    children,
}: Props) => {
    const Modal = styled.div`
        position: relative;
    `;
    const ToggleMenu = styled.div`
        position: absolute;
        top: ${expandRight ? '10px' : '60px'};
        left: ${expandRight && '60px'};
        border: 1px solid #aaa;
    `;
    return (
        <Modal onClick={(e) => handleToggle && handleToggle(e, label)}>
            {icon}
            {toggle && <ToggleMenu>{children}</ToggleMenu>}
        </Modal>
    );
};

export default Modal;
