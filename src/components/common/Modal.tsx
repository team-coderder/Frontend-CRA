import React from 'react';
import styled from '@emotion/styled/macro';

interface Props {
    label: string;
    icon: React.ReactNode;
    expandRight?: boolean;
    toggle?: boolean;
    handleToggle?: (e: React.FormEvent, id: string) => void;
    children?: React.ReactNode;
}

const Icon = styled.div`
    position: relative;
`;
const ToggleMenu = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
`;

const Modal = ({ label, icon, toggle, handleToggle, children }: Props) => {
    return (
        <Icon onClick={(e) => handleToggle && handleToggle(e, label)}>
            {icon}
            {toggle && <ToggleMenu>{children}</ToggleMenu>}
        </Icon>
    );
};

export default Modal;
