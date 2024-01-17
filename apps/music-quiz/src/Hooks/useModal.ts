import { useState } from 'react';

export type ModalProps = {
    open: () => void;
    close: () => void;
    isActive: boolean;
};

export default function useModal(name = ''): ModalProps {
    const [isActive, setActive] = useState(false);

    const close = () => {
        setActive(false);
    };

    const open = () => {
        setActive(true);
    };

    return { isActive, open, close };
}
